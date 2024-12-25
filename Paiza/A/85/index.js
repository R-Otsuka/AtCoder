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



    process.exit(0);
    return;
});
