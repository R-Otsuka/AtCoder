process.stdin.resume();
process.stdin.setEncoding('utf8');

let _data = '';

process.stdin.on('data', (chunk) => {
    _data += chunk.toString();
});

process.stdin.on('end', () => {
    let spline = _data.split('\n');
    const [H, W] = spline[0].split(' ').map(Number);
    let tile = 0;
    const list = [];
    for (let i = 0; i < H; i++) {
    list.push(spline[i + 1].split(''));
    }
    console.log(H, W);
    console.log(list);

    const counterMapList = [];
    for (let i = 0; i < H; i++) {
        for (let j = 0; j < W; j++) {
            tile += list[i][j] === '.' ? 1 : 0;
        }
    }

    console.log(tile, 'tile');

    // 方針①： A, Bの使用個数の組み合わせを出す
    const counterMap = [];
    for (let i = tile; i >= 0; i = i - 3) {
        if (i % 2 === 0) {
            counterMap.push({
                A: i / 2,
                B: (tile - i) / 3,
            });
        }
    }

    console.log(counterMap, 'counterMap');

    // Bを全て配置する
    const renderAllBTile = (list, BCount) => {
        const newList = list.map((row) => row.slice());
        return newList;
    }

    for (let i = 0; i < counterMap.length; i++) {
        // 使用個数
        const ACount = counterMap[i].A;
        const BCount = counterMap[i].B;

        const AllBPlacedList = renderAllBTile(list, BCount);

        // Bを全て配置する
        for (let j = 0; j < B; j++) {
        }
    }


    // 2次元タイルについて、配置可能なBの置き場所を列挙する
    const putB = (list) => {

        return newList;
    }


    // 方針①
    // A, Bの使用数は決まっているので、それで全通り
    // 四角形をおくこともできるよ。

    // 1. Bの置き方を決める。
    // 2. 少なくとも1箇所空いちゃうような置き方はダメ
    // 3. 2を満たすように全て置く
    // 4. 残った盤面に、Aを当てはめていく。
    // 5. Aが置けるか否かは

    process.exit(0);
});
