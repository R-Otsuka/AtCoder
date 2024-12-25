process.stdin.resume();
process.stdin.setEncoding('utf8');

let _data = '';

process.stdin.on('data', (chunk) => {
    _data += chunk.toString();
});

process.stdin.on('end', () => {
  // [N, M]系
  // let spline = _data.split('\n');
  // const [N, M] = spline[0].split(' ').map(Number);
  // const list = [];
  // for (let i = 0; i < M; i++) {
  //   list.push(spline[i + 1].split(' ').map(Number));
  // }
  // console.log(N,M);
  // console.log(list);

  // N系
  // let spline = _data.split('\n');
  // const N = Number(spline[0]);
  // const list = [];
  // for (let i = 0; i < M; i++) {
  //   list.push(spline[i + 1].split(' ').map(Number));
  // }
  // console.log(N,M);
  // console.log(list);


  process.exit(0);
});
