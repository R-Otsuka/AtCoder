process.stdin.resume();
process.stdin.setEncoding('utf8');

let _data = '';

process.stdin.on('data', (chunk) => {
    _data += chunk.toString();
});

process.stdin.on('end', () => {
  let spline = _data.split('\n');
  const [n, m, q] = spline[0].split(' ').map(Number);
  const list = [];
  for (let i = 0; i < q; i++) {
    list.push(spline[i+1].split(' ').map(Number));
  }

  // 再起的方針
  // 3,4,3
  // pb - pa = c

  // const dfs = (n, )
  // 最後に一葉なな数列が決まる => それに対して評価を行う
  let max = 0;
  console.log(list)
  const dfs = (k, max, l) => {
    if (k === n) {
      let num = 0;
      for (let j = 0; j < q; j++) {

        if (l[list[j][1] - 1] - l[list[j][0] - 1] === list[j][2]) {
          num += list[j][3];
        }
      }
      if (max <= num) {
        max = num;
      }
      return;
    }
    for (let i = 0; i < m - max; i++) {
      const _l = [...l, i + max];
      dfs(k + 1, i + max, _l);
    }
  }
  dfs(0, 0, []);
  console.log(max);

  process.exit(0);
});