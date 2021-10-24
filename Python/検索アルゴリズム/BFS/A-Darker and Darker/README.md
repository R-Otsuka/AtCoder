多点スタートな最短路問題

参考:https://qiita.com/gh_takumi/items/bdd5db460f24a5b31d83

dist...answer を収納する場所

タプルは上書きや削除ができない。

## 速度が上がらない->壁判定を先においてしまう戦法はあり。

    # 番兵を置いておく。
    # pythonは list[-1] で最後尾になるので、
    # 置くのは一つだけでいい。
    # field = [[c for c in input()] + ['#'] for _ in range(H)]
    # field.append(['#'] * (W+1))
