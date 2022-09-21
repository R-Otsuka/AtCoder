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
   const recordList = [];

   for (let i = 0; i < N; i++) {
     recordList.push(spline[i + 1].split(' ').map(Number).sort().reverse());
   }

  let winnerCandi = [...Array(N)].map((_, i) => i);
  // 最大値を出す。 -> 脱落の繰り返し
  for (let i = 0; i < K; i++) {
      const record = {};
      let max = 0;
      for (let j = 0; j < winnerCandi.length; j++) {
          const time = recordList[winnerCandi[j]][i];
        //   console.log(time, 'time')
          record[time] = record[time] || [];
          record[time].push(winnerCandi[j]);
          if (max < time) {
              max = time;
          }
      }
    //   console.log(record, 'reco');
    //   console.log(record[max], 'max')
      // 最大値は誰
      if (record[max].length === 1) {
          console.log(record[max][0] + 1);
          return;
      } else {
          winnerCandi = record[max];
      }
      if (i === K - 1) {
          for (let m = 0; m < winnerCandi.length; m ++) {
            console.log(winnerCandi[m] + 1);
          }
      }
  }

  process.exit(0);
  return;
});