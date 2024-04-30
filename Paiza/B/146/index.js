process.stdin.resume();
process.stdin.setEncoding('utf8');

let _data = '';

process.stdin.on('data', (chunk) => {
    _data += chunk.toString();
});

process.stdin.on('end', () => {
  let spline = _data.split('\n');
  const [A, B] = spline[0].split(' ').map(Number); //splitチェック
  const N = Number(spline[1]); //splitチェック
  console.log(A, B, N);

  const list = spline[2].split(' ').map(Number).sort();

  const theoryMax = Math.ceil(list[list.length - 1] / B);
  console.log(theoryMax, 'theoryMax');

  let max = theoryMax;
  for (let i = 0; i < theoryMax; i++) {
    const BCount = i;
    let ACount = 0;
    for (let j = 0; j < list.length; j++) {
      const target = list[j];
      ACount += Math.max(Math.ceil((target -  BCount * B) / A), 0);
    }
    if (max > ACount + BCount) {
      max = ACount + BCount;
    };
  }

  console.log(max);

  process.exit(0);
});


// 方針

// 全体攻撃は最初に放つ
// ある時まで放つ
// => 全体攻撃をK回とする
// Aで割ったのがcount_hpとする

// 誰かのHPが削り切れた時じゃ無いと意味ない => 最短hp_countマン次第かな...
