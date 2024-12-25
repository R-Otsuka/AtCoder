process.stdin.resume();
process.stdin.setEncoding('utf8');

let _data = '';

process.stdin.on('data', (chunk) => {
    _data += chunk.toString();
});

//
process.stdin.on('end', () => {
    let spline = _data.split('\n');
    const [N, M] = spline[0].split(' ').map(Number);
    const list = [];

    for (let i = 0; i < M; i++) {
        list.push(spline[i + 1].split(' ').map(Number));
    }

    // その数字以下が何個存在すルカ、要素数だけ持っておく
    const dist = {};
    const frontMap = {};
    const reverseMap = {};
    const row = [];
    let restSum = N * (N + 1) / 2;
    let restCount = N - 1;

    // console.log(N,M, list)
    // 方針A
    // ①最弱を決める = 存在しない要素を見つける
    // ②①で特定した最弱が存在する要素は無視
    // ③以後無限ループ
    // listが無くなる or 特定できなければout

    // sortする、逆順sortも保持

    // ないやつ見つける => それを消す


    // 方針B
    // sort

    // [[1,2], [3,4], [5,6]]とかなってるのを1つ目の要素でsort
    const uniqueList = Array.from(new Set(list.map(JSON.stringify))).map(JSON.parse);
    const sortedList = uniqueList.sort((a, b) => a[0] - b[0]);

    // console.log(sortedList, 'sortedList');

    let first = -1;
    for (let i = 0; i < sortedList.length; i++) {
        const [a, b] = sortedList[i];
        frontMap[a] = frontMap[a] || [];
        frontMap[a].push(b);
        reverseMap[b] = reverseMap[b] || [];
        reverseMap[b].push(a);
        dist[a] = dist[a] || 0;
        dist[a]++;
    }

    // console.log(dist, 'dist');
    // console.log(frontMap, 'frontMap');
    // console.log(reverseMap, 'reverseMap');
    // distのkeyに存在しない数字を見つける.

    // console.log(reverseMap, 'reverseMap');
    const removeInfo = (num) => {
        const target = reverseMap[num] || [];
        for (let i = 0; i < target.length; i++) {
            const t = target[i];
            dist[t] = dist[t] - 1;
        }
    }

    const findTarget = () => {
        // console.log(dist, 'dist');
        let total = 0;
        let count = 0;
        for (const key in dist) {
            if (dist[key] != 0) {
                total += Number(key);
                count++;
            }
        }
        if (count != restCount) {
            // out
            console.log(-1);
            process.exit(0);
        }
        // console.log(restSum, total);
        const ans = restSum - total;
        restSum = total;
        restCount = restCount - 1;
        return ans;
    }

    for (let i = 0; i < N; i++) {
        const target = findTarget();
        // console.log(target, 'target');
        row.push(target);
        removeInfo(target);
        // console.log(dist, 'dist');
    }

    console.log(row.reverse().join(' '));

    process.exit(0);
    return;
});
