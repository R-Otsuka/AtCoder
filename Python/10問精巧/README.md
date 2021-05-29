## 全体像

https://qiita.com/e869120/items/f1c6f98364d1443148b3#1-5-%E8%8C%B6%E8%89%B2%E3%82%B3%E3%83%BC%E3%83%80%E3%83%BC%E3%81%A7%E8%A6%81%E6%B1%82%E3%81%95%E3%82%8C%E3%82%8B-4-%E3%81%A4%E3%81%AE%E3%81%93%E3%81%A8

## こちらの問題集

https://qiita.com/KoyanagiHitoshi/items/c5e82841b8d0f750851d

## next step

ここまで解いたら
https://qiita.com/drken/items/fd4e5e3630d0f5859067#%E3%81%93%E3%81%93%E3%81%BE%E3%81%A7%E8%A7%A3%E3%81%84%E3%81%9F%E3%82%89

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
