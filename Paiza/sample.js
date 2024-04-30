process.stdin.resume();
process.stdin.setEncoding('utf8');

let _data = '';

process.stdin.on('data', (chunk) => {
    _data += chunk.toString();
});

process.stdin.on('end', () => {
  let spline = _data.split('\n');
  const [N, M] = spline[0].split(' ').map(Number); //splitチェック
  const list = [];
  console.log(N,M);
  for (let i = 0; i < M; i++) {
    list.push(spline[i + 1].split(' ').map(Number)); // splitチェック
  }
  console.log(list);

  const numMap = {};
  for (let i=1; i <= N; i++) {
    numMap[i] = 1;
  }

  for (let i=0; i < M; i++) {
    const [x, y] = list[i];
    numMap[x] = numMap[x] + numMap[y];
  }

  console.log(numMap);

  let max = 0;

  for (let i=1; i <= N; i++) {
    if (max < numMap[i]) {
        max = numMap[i];
    }
  }
  console.log(max, 'max');

  for (let i=1; i <= N; i++) {
    if (max === numMap[i]) {
        console.log(i);
    }
  }


  process.exit(0);
});
