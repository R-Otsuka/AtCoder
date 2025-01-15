process.stdin.resume();
process.stdin.setEncoding('utf8');

let _data = '';

process.stdin.on('data', (chunk) => {
    _data += chunk.toString();
});

//
process.stdin.on('end', () => {
    let spline = _data.split('\n');
    const [N, V] = spline[0].split(' ').map(Number);
    const list = [];

    for (let i = 0; i < N; i++) {
        list.push(spline[i + 1].split(' ').map(Number));
    }
    console.log(N, V, list);


    const dp = {};
    dp[0] = {};

    // i番目(i含む)以降で、体積Jまでの最大value
    for (let i = 1; i <= N; i++) {
        dp[i] = dp[i] || {};
        for (let j = 0; j <= V; j++) {
            // 体積が0
            if (j === 0) {
                dp[i][j] = 0;
                continue;
            }
            // 体積が足りない
            const [_X, _V, _C] = list[i -1];
            if (j < _V) {
                dp[i][j] = dp[i - 1][j] || 0;
                continue;
            }
            let maxValue = 0;
            // i番目の宝石の入れる全パターンを比較
            for (let m = 0; m <= _C; m++) {

                if (j < _V * m) {
                    m = _C;
                    continue;
                }
                const _value = (dp[i - 1][j - _V * m] || 0) + (_X * m);
                if (maxValue < _value) {
                    maxValue = _value;
                }
            }
            dp[i][j] = maxValue;
        }
    }
    console.log(dp[N][V]);

    process.exit(0);
    return;
});
