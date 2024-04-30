process.stdin.resume();
process.stdin.setEncoding('utf8');

let _data = '';

process.stdin.on('data', (chunk) => {
    _data += chunk.toString();
});

process.stdin.on('end', () => {
  let spline = _data.split('\n');
  const N = Number(spline[0].split(' ')[0]);
  const K = Number(spline[0].split(' ')[1]);

  const map = {};
  const distMap = {};
  const list = [];
  console.log(N, K);
  for (let i = 0; i < N; i++) {
    list.push(spline[i + 1].split(' ').map(Number)); // splitチェック
  }
  const numList = spline[N + 1].split(' ').map(Number)

  console.log(list, 'list');
  console.log(numList, 'numList')

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        const num = list[i][j];
        map[num] = {x: i, y: j};
        distMap[i] = distMap[i] || {};
        distMap[i][j] = false;
    }
  }
  console.log(map, 'map');
  console.log(distMap, 'distMap')

 console.log(numList.length);
  for (let i = 0; i < numList.length; i++) {
    const num = numList[i];
    console.log(num, 'num');
    if (!map[num]) {
        continue;
    }
    const {x, y} = map[num];
    console.log(x, y);
    distMap[x][y] = true;
  }
  console.log(distMap, 'distMap')

  // ビンゴ判定

  let count = 0;
  for (let i = 0; i < N; i++) {
    let flag = true;
    for (let j = 0; j < N; j++) {
      if (distMap[i][j] === false) {
        flag = false;
      }
    }
    if (flag === true) {
      count++;
    }
  }
  for (let i = 0; i < N; i++) {
    let flag = true;
    for (let j = 0; j < N; j++) {
      if (distMap[j][i] === false) {
        flag = false;
      }
    }
    if (flag === true) {
      count++;
    }
  }

  // 斜め

  let flag = true;
  for (let i = 0; i < N; i++) {
    if (distMap[i][i] === false) {
      flag = false;
    }
  }
  if (flag === true) {
    count++;
  }

  flag = true;
  for (let i = 0; i < N; i++) {
    if (distMap[i][N - i - 1] === false) {
      flag = false;
    }
  }
  if (flag === true) {
    count++;
  }


  process.exit(0);
  return;
});
