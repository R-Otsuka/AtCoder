process.stdin.resume();
process.stdin.setEncoding('utf8');

let _data = '';

process.stdin.on('data', (chunk) => {
    _data += chunk.toString();
});


const distMap = {};

process.stdin.on('end', () => {
    let spline = _data.split('\n');
    const N = Number(spline[0]);
    const list = [];

    // 2点を繋ぐ直線により空間が分断される
    const spaceIdMap = {};

    for (let i = 0; i < N; i++) {
        list.push(spline[i + 1].split(' ').map(Number));
    }

    let max = 0;


    // 分断リストを作る
    for (let i = 0; i < N; i++) {
        const a = list[i];
        for (let j = i + 1; j < N; j++) {
            const b = list[j];
            // 直線の方程式を作る
            const y = (x) => {
                return (a[1] - b[1]) / (a[0]- b[0]) *  x + (a[1] - (a[1] - b[1]) / (a[0]- b[0]) * a[0]);
            }
            for (let k = 0; k < N; k++) {
                if (k === i || k === j) {
                    continue;
                }
                const c = list[k];
                spaceIdMap[i] = spaceIdMap[i] || {};
                spaceIdMap[i][j] = spaceIdMap[i][j] || {};
                spaceIdMap[i][j][k] = a[0] !== b[0]
                ? y(c[0]) > c[1] ? 1 : y(c[0]) < c[1] ? 2 : 0
                : c[0] > a[0] ? 1 : c[0] < a[0] ? 2 : 0;
            }
        }
    }


    for (let i = 0; i < N - 2; i++) {
        const a = list[i];
        for (let j = i + 1; j < N - 1; j++) {
            const b = list[j];
            // 2点が決まる 1 / 1000
            for (let k = j + 1; k < N; k++) {
                // 3点が決まる 5万ループ
                // kは空間のどっち側にいるか
                const c = list[k];
                const spaceId = spaceIdMap[i][j][k];

                const space2Id = spaceIdMap[i][k][j];
                const space3Id = spaceIdMap[j][k][i];
                let count = 0;
                for (let p = 0; p < N; p++) {
                    if (p === i || p === j || p === k) {
                        continue;
                    }
                    if ((spaceIdMap[i][j][p] === spaceId || spaceIdMap[i][j][p] === 0) && (spaceIdMap[i][k][p] === space2Id || spaceIdMap[i][k][p] === 0) && (spaceIdMap[j][k][p] === space3Id || spaceIdMap[j][k][p] === 0)) {
                        count++;
                    }
                };
                if (count > max) {
                    max = count;
                }
            }
        }
    }

    console.log(max);


    process.exit(0);
    return;
});

// 1,2,3,4,5
// 1,3,2,4,5

// 1,5,6

// 1,5,6,2,8,9


// 1, 2, 3, 4, 5
// 1, 3
// 0, 2, 0, 4, 5
//


// 1,3
// 次は 2, 5

// fruits.splice(index, 1)