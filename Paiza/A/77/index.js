process.stdin.resume();
process.stdin.setEncoding('utf8');

let _data = '';

process.stdin.on('data', (chunk) => {
    _data += chunk.toString();
});

process.stdin.on('end', () => {
    let spline = _data.split('\n');
    const H = Number(spline[0]);
    const list = [];
    const distMap = {};

    for (let i = 0; i < H; i++) {
        list.push(spline[i + 1].split(''));
    }

    console.log(H, list);

    const dxy = [[1, 0], [-1, 0], [0 , 1], [0, -1]];

    // 削除処理
    const del = (_list) => {
        // 一括削除対象
        const delTarget = {};

        for (let i = 0; i < H; i++) {
            for (let j = 0; j < 5; j++) {
                const item = list[i][j];
                if (item === '.') {
                    continue;
                }
                let flag = true;
                for (let l = 0; l < 4; l++) {
                    const [_x, _y] = dxy[l];
                    const new_x = i + _x;
                    const new_y = j + _y;
                    if (0 > new_x || 0 > new_y || new_x >= H || new_y >= 5) {
                        continue;
                    }
                    const _item = list[new_x][new_j];
                    if (_item !== item) {
                        flag === false;
                    }
                }
                // 削除対象
                if (flag === true) {
                    delTarget[i][j] = true;
                    const new_x = i + _x;
                    const new_y = j + _y;
                    if (0 > new_x || 0 > new_y || new_x >= H || new_y >= 5) {
                        continue;
                    }
                    delTarget[new_x][new_y] = true;
                }
            }
        }
        // 対象を削除して新しいlistを返す
        if (Object.keys(obj).length !== 0) {
            for (let i in delTarget) {
                for (let j in delTarget[i]) {
                    _list[i][j] = '.';
                }
            }
            return _list;
        }

        // 削除対象がなければanswer出力
        console.log(_list);
    }

    // 落下処理
    const drop = (_list) => {
        const newList = [];
        for (let i = 0; i < 5; i++) {
            const row = [];
            for (let j = 0; j < H; j++) {
                row.push(_list[j][i]);
            }
            const newRow = row.filter(n => n !== '.');
            console.log(row, 'row');
            console.log(newRow, 'newRow');
            newList.push(...new Array(H - newRow.length).fill('.'), ...newRow);
        }
        return newList;
    }


    process.exit(0);
    return;
});
