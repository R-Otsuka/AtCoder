process.stdin.resume();
process.stdin.setEncoding('utf8');

let _data = '';

process.stdin.on('data', (chunk) => {
    _data += chunk.toString();
});

process.stdin.on('end', () => {
    let spline = _data.split('\n');
    const [H, W] = spline[0].split(' ').map(Number);
    const list = [];

    for (let i = 0; i < H; i++) {
        list.push(spline[i + 1].split(''));
    }

    const aaa = {
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        e: 4,
        f: 5,
        g: 6,
        h: 7,
        i: 8,
        j: 9,
        k: 10,
        l: 11,
        m: 12,
        n: 13,
        o: 14,
        p: 15,
        q: 16,
        r: 17,
        s: 18,
        t: 19,
        u: 20,
        v: 21,
        w: 22,
        x: 23,
        y: 24,
        z: 25,
    };

    const dxyMap = {
        0: [1, 0],
        1: [-1, 0],
        2: [0, 1],
        3: [0, -1]
    };

    // 一旦goalをする
    // distMap = {0: { 0: 1}}
    const deps = (x, y, distMap) => {
        const directionStack = [];
        const alpMap = {};
        for (let i = 0; i <= 3; i++) {
            const [_x, _y] = dxyMap[i];
            const newX = i + _x;
            const newY = i + _y;
            if (0 > newX || 0 > newY || newX >= H || newY >= W) {
                // 場外サヨナラ
                continue;
            }
            if (distMap[newX][newY]) {
                // 来たことある場所もさよなら
                continue;
            }
            alpMap[i] = aaa[list[newX][newY]];
        }
        // alpMap = {0: 10, 1: 1, 2: 9, 3: 4} => { 1: 1, 3: 4, 2: 9, 0: 10}
        // 小さい順にsortする
        const sortedEntries = Object.entries(alpMap).sort(([, valueA], [, valueB]) => valueA - valueB);

        // ソートされた順でループ
        for (const [key, value] of sortedEntries) {
          console.log(`Key: ${key}, Value: ${value}`);
        }

        // directionStack.push([new_x, new_y]);
        if (x === H - 1 && y === W - 1) {
            console.log('goal');
            return 'goal';
        }
        return;

        const newX =
        const newY =
        const newMap =
        deps(newX, newY, newMap)
    }

    deps(0, 0, {0: { 0: 1 }});


    process.exit(0);
    return;
});
