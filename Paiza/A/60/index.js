process.stdin.resume();
process.stdin.setEncoding('utf8');

let _data = '';

process.stdin.on('data', (chunk) => {
    _data += chunk.toString();
});

process.stdin.on('end', () => {
    let spline = _data.split('\n');
    const N = Number(spline[0].split(' ')[0]); // N店
    const M = Number(spline[0].split(' ')[1]); // M - 1人
    const K = Number(spline[0].split(' ')[2]); // k個以上の3
    const recordList = [];
    const matchMap = {};
    const list = [];
    
    for (let i = 0; i < M + 1; i++) {
        recordList.push(spline[i + 1].split(' ').map(Number));
    }

    console.log(recordList)

    for (let i = 0; i < N; i++) {
        const myScore = recordList[0][i];
        if (myScore === 3) {
            for (let j = 0; j < M; j++) {
                const score = recordList[j + 1][i];
                if (score === 3) {
                    matchMap[j] = matchMap[j] || 0;
                    matchMap[j] += 1;
                }
            }
        }
    }

    for (let i = 0; i < N; i++) {
        const myScore = recordList[0][i]
        let flag = true;
        if (myScore === 0) {
            for (let j = 0; j < M; j++) {
                if (matchMap[j] >= K && recordList[j + 1][i] === 3 && flag) {
                    list.push(i + 1);
                    flag = false;
                }
            }
        }
    }

    if (list.length === 0) {
        console.log('no')
    } else {
        for (let i = 0; i < list.length; i++) {
            console.log(list[i]);
        }
    }
    process.exit(0);
    return;
});