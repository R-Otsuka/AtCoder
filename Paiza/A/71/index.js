process.stdin.resume();
process.stdin.setEncoding('utf8');

let _data = '';

process.stdin.on('data', (chunk) => {
    _data += chunk.toString();
});

process.stdin.on('end', () => {
    let spline = _data.split('\n');
    const N = Number(spline[0]); // 10万以下
    const list = [];

    for (let i = 0; i < N; i++) {
        list.push(Number(spline[i + 1]));
    }

    // 方針
    // 10倍にする数字を誰にするか
    // 10倍数字は隣接不可。最後もダメ


    console.log(N, list);

    process.exit(0);
    return;
});