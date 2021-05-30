## 内包表記について

- if 文の内包
  print("Even" if a\*b % 2 == 0 else "Odd")

## 組み込み関数について (標準装備)<->ユーザー定義関数

```
すべての要素が True か判定: all()
いずれかの要素が True か判定: any()
すべての要素が False か判定: not any()
```

## グリッド問題

## 便利な書き方

```
a, b, c = [1, 2, 3]
print(a) //1
```

- 文字列<->list
  https://www.headboost.jp/python-strings-into-a-list/

- smap は map オブジェクトを返す。list では返してくれない。

```
NG
list = map(int,input().split()) //入力3つ
OK
list = list(map(int,input().split())) //入力3つ
OK
a,b,c = map(int,input().split()) //入力3つ
```
