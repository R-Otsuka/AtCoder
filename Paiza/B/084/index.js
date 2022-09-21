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

  for (let i = 0; i < M + 1; i++) {
    recordList.push(spline[i + 1].split(' ').map(Number));
  }

  process.exit(0);
  return;
});