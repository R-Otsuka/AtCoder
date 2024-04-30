process.stdin.resume();
process.stdin.setEncoding('utf8');

let _data = '';

process.stdin.on('data', (chunk) => {
  _data += chunk.toString();
});

process.stdin.on('end', () => {
  let spline = _data.split('\n');
  const N = Number(spline[0].split(' ')[0]);
  const R = Number(spline[0].split(' ')[1]);

  const list = [];
  for (let i = 0; i < N; i++) {
    const sp = spline[i + 1].split(' ');
    list.push({
      x: Number(sp[0]),
      y: Number(sp[1]),
    });
  }

  const tmp = {};
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      const a = list[i];
      const b = list[j];
      const dis = Math.pow(a.x - b.x, 2) +  Math.pow(a.y - b.y, 2);
      const dis2 = 4 * R * R;
      if (dis2 >= dis) {
        tmp[i] = tmp[i] || {};
        tmp[i][j] = true;
        tmp[j] = tmp[j] || {};
        tmp[j][i] = true;
      }
    }
  }

  let count = 0;
  const useCache = {};
  const loop = (t, isNew) => {
    if (useCache[t]) {
      return;
    }
    if (isNew) {
      count++;
    }
    useCache[t] = true;
    const obj = tmp[t] || {};
    for (let key in obj) {
      loop(key, false);
    }
  }
  for (let i = 0; i < N; i++) {
    loop(i, true);
  }

  console.log(count);

  return;
});
