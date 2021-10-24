# import sys
# sys.setrecursionlimit(10**7)
# h, w = map(int, input().split())
# c = [list(input()) for i in range(h)]


# def dfs(x, y):
#     if not(0 <= x < h) or not(0 <= y < w) or c[x][y] == "#":
#         return
#     if c[x][y] == "g":
#         print("Yes")
#         sys.exit()

#     c[x][y] = "#"
#     dfs(x+1, y)
#     dfs(x-1, y)
#     dfs(x, y+1)
#     dfs(x, y-1)


# for i in range(h):
#     for j in range(w):
#         if c[i][j] == "s":
#             sx, sy = i, j

# dfs(sx, sy)
# print("No")

import sys
sys.setrecursionlimit(10**7)
H, W = map(int, input().split())
c = [list(input()) for i in range(H)]


# 上下左右を探索、移動後は#に変換。
def dfs(x, y):
    # 行き止まり or 場外ならリターン
    if not(0 <= x < H) or not(0 <= y < W) or c[x][y] == "#":
        return
    # ゴールについたらYesを出力
    if c[x][y] == "g":
        print("Yes")
        sys.exit()

    # これを実行すると、DFSの捜索が視覚的に確認できる。
    checkRoute(c, x, y)

    # 一度通過した場所には来れないようにする
    c[x][y] = "#"
    # 4方位に探索。
    dfs(x+1, y)  # 上
    dfs(x-1, y)  # 下
    dfs(x, y+1)  # 右
    dfs(x, y-1)  # 左


def checkRoute(c, x, y):
    c[x][y] = '\033[31m'+'○'+'\033[0m'
    print("=====================")
    for i in range(H):
        for j in range(W):
            if j == W-1:
                print(c[i][j])
            else:
                print(c[i][j], end='')


for i in range(H):
    for j in range(W):
        if c[i][j] == "s":
            #　dfs探索をスタート
            dfs(i, j)

print("No")
