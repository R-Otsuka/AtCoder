process.stdin.resume();
process.stdin.setEncoding('utf8');

let _data = '';

process.stdin.on('data', (chunk) => {
    _data += chunk.toString();
});

process.stdin.on('end', () => {
    let spline = _data.split('\n');
    const [N, M] = spline[0].split(' ').map(Number);

    const list = [];
    // 前提、valueは主keyの人間id
    // 初期は1番が主key
    const connectionMap = { 1: 1 };
    for (let i = 0; i < M; i++) {
        const text = spline[i + 1].split(' ');
        const [s, l] = Number(text[0]) < Number(text[2]) ? [Number(text[0]), Number(text[2])] : [Number(text[2]), Number(text[0])];
        const f = text[4] !== 'a';
        list.push({
            s, l, f
        });
    }
    console.log(list);
    list.sort((a, b) => {
        return a.s - b.s || a.l - b.l;
    })

    console.log(list);

    for (let i = 0; i < list.length; i++) {
        const l = list[i];
        // ①共にconnectionから浮いてるなら、浮き組みで最小idのl.sを主keyとする
        if (!connectionMap[l.s] && !connectionMap[l.l]) {
            connectionMap[l.s] = l.s;
            console.log('aa');
        }

        // ②片方がconnectionから浮いている場合、そいつをconnectする
        // { 1: 2 } => 1 === 2, { 1: -2 } => 1 !== 2
        connectionMap[l.l] = l.f ? connectionMap[l.s] : 0 - connectionMap[l.s];
        console.log(connectionMap, '途中', l);

        // ③両方connectionに所属してる場合は矛盾が起きる可能性あり
        // 矛盾は自身 or 同一主keyを持つコネクト済み同士でのみ起きる、のでケア
    }
    console.log(connectionMap, 'map');

    console.log(N, M, list);

    process.exit(0);
    return;
});


// 矛盾 is どういう状態
// true = a === b
// false = a !== b
// min(a, b)が小さい順に処理する
// m === 10万のsort, O(NlogN)

// 2 === 2の時も考える