process.stdin.resume();
process.stdin.setEncoding('utf8');

let _data = '';

process.stdin.on('data', (chunk) => {
    _data += chunk.toString();
});

process.stdin.on('end', () => {
    let spline = _data.split('\n');
    const N = Number(spline[0]);
    const list = spline[1].split(' ').map(Number);

    let isChanged = true;

    const connectAndRemove = (_list) => {
        isChanged = false;
        for (let i = 0; i < _list.length - 1; i++) {
            if (_list[i] !== 0 && _list[i] === _list[i + 1]) {
                _list[i] = 2 * _list[i];
                _list[i + 1] = 0;
                isChanged = true;
            }
        }
        return _list.filter((v) => v !== 0).sort((a, b) => a - b);
    }



    const res = connectAndRemove(list);


    process.exit(0);
    return;
});
