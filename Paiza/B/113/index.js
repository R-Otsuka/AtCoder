process.stdin.resume();
process.stdin.setEncoding('utf8');

let _data = '';

process.stdin.on('data', (chunk) => {
    _data += chunk.toString();
});

process.stdin.on('end', () => {
    let spline = _data.split('\n');
    const N = Number(spline[0].split(' ')[0]); // N回
    const recordList = [];
    const dist = [];

    for (let i = 0; i < N; i++) {
        recordList.push(Number(spline[i + 1] ));
    }

    const adjust = (list) => {
        for (let i = list.length - 1; i > 0; i--) {
            if (list[i] === list[i - 1]) {
                list[i - 1] *= 2;
                list.splice(i, 1)
            }
        }
    }

    for (let i = 0; i < N; i++) {
        const num = recordList[i];
        if (num === 2) {
            // 右
            // console.log(dist.length)
            dist.push(2);
        } else {
            console.log('読ん')
            if (dist[dist.length - 1] === 2) {
                // console.log(dist.length - 1)
                dist.splice(dist.length - 1, 0, 4) ;
            } else {
                // console.log(dist.length)
                dist.push(4);
            }
        }

        // 左詰め
        adjust(dist);
        console.log(dist)
    }

    process.exit(0);
    return;
});