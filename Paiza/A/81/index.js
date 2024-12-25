process.stdin.resume();
process.stdin.setEncoding('utf8');

let _data = '';

process.stdin.on('data', (chunk) => {
    _data += chunk.toString();
});

process.stdin.on('end', () => {
  let spline = _data.split('\n');
  const N = Number(spline[0]);
  const numMap = {};
  console.log(N);
  for (let i = 0; i < 2 * N; i++) {
    const num = Number(spline[i + 1]);
    numMap[num] = numMap[num] || [];
    numMap[num].push(i);
  }

  console.log(numMap)

  // bigint使う
  let ans = 0n;

  for (let i = 0; i < N; i++) {
      const counts = numMap[i + 1];
      const diff = counts[1] - counts[0];
      ans += BigInt(diff);
  }

  console.log(ans);


  process.exit(0);
});
