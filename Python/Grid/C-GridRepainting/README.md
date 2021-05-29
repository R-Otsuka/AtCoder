# pass,exi(),continue などループ内記法について

- continue
  処理のスキップ、主にループ内で使われる。
  実行を止め、次のループに進む。

- pass
  何もしない

- break
  ループを一つ抜ける

```
for x in range(5):
  if x == 3:
    continue
  print(x)
...
0
1
2
4
```

- exit()
  プログラムの実行を終了させる
