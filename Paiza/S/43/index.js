process.stdin.resume();
process.stdin.setEncoding('utf8');

let _data = '';

process.stdin.on('data', (chunk) => {
    _data += chunk.toString();
});

process.stdin.on('end', () => {
    let spline = _data.split('\n');
    const [N, C] = spline[0].split(' ').map(Number);
    const list = [];
    for (let i = 0; i < N; i++) {
    list.push(spline[i + 1].split(' ').map(Number));
    }

    if (N === 1 || N === 2) {
        console.log(C);
        process.exit(0);
    }


    function sum(data, func) {
        var val = 0;
        for (var i = 0; i < data.length; i++) {
            val += func(data[i]);
        }
        return val;
    }

    // 最小二乗スコアを求めるメソッド
    function calculateScore(start, end) {
        const data = list.slice(start, end + 1);
        var N = data.length;
        if (N === 1 || N === 0) {
            return 0;
        }
        var sumX = sum(data, function (item) {
            return item[0];
        });

        var sumX2 = sum(data, function (item) {
            return item[0] * item[0];
        });

        var sumY = sum(data, function (item) {
            return item[1];
        });

        var sumXY = sum(data, function (item) {
            return item[0] * item[1];
        });


        var a, b;

        var denominator = (N * sumX2) - Math.pow(sumX, 2);

        var molecule1 = (N * sumXY) - (sumX * sumY);
        a = molecule1 / denominator;

        var molecule2 = (sumX2 * sumY) - (sumXY * sumX);
        b = molecule2 / denominator;

        var sse = 0;
        for (let i = 0; i < data.length; i++) {
            var predictedY = a * data[i][0] + b;
            sse += Math.pow(data[i][1] - predictedY, 2);
        }
        return Math.round(sse * 10**8) / 10**8;
    }


    // [`start-end`]を1直線で結んだ時の最小二乗スコア
    const singleScoreMap = {};
    // [`start-end`]を複数直線で結んだ時の二乗スコアの最小値(C考慮)
    const minMultipleScoreMap = {
        '0-0': C,
        '0-1': C,
    };

    // singleScoreMap作成
    for (let i = 0; i < N; i++) {
        for (let j = i; j < N; j++) {
            const score = calculateScore(i, j);
            singleScoreMap[`${i}-${j}`] = score;
        }
    }


    // i番目のprotを追加
    for (let i = 2; i < N; i++) {
        let minScore = N * C; // 理論最大値
        // [0-i]区間の二乗スコアの最小値　＋　[i-N]区間の直線スコア
        for (let j = 0; j <= i; j++) {
            if (j === 0) {
                const score = singleScoreMap[`0-${i}`] + C;
                if (minScore > score) {
                    minScore = score;
                }
                // [0-i]区間の理論値
                if (score <= C * 2) {
                    j = i;
                }
                continue;
            }
            // [0-j]区間の最小二乗スコア
            const before = minMultipleScoreMap[`0-${j - 1}`];
            // [j-N]区間の最小二乗スコア
            const after = singleScoreMap[`${j}-${i}`] + C;
            const score = Math.round((before + after) * 10**8) / 10**8;
            if (minScore > score) {
                minScore = score;
            }
        }
        minMultipleScoreMap[`0-${i}`] = minScore;
    }

    console.log(minMultipleScoreMap[`0-${N - 1}`]);

    process.exit(0);
});

