
## 速度が上がらない->壁判定を先においてしまう戦法はあり。
    # 番兵を置いておく。
    # pythonは list[-1] で最後尾になるので、
    # 置くのは一つだけでいい。
    # field = [[c for c in input()] + ['#'] for _ in range(H)]
    # field.append(['#'] * (W+1))

# from collections import deque

# H, W = map(int, input().split())
# # 入力list
# # 先ず、フロアmapを作成、(-1と0)
# # 次にqueのlistを作る(0のみ)、後ろから入って前から取り出して関数にかける。
# # 関数=周囲を自身のnum + 1で登録する。この際、登録した番地はqueにぶち込む。
# # 全てが終わったら最後の値を取得する。

# # 全体map
# floor = [list(input()) for i in range(H)]
# # 値の補完用
# dist = [[-1]*W for i in range(H)]

# # 実行待ち
# que = deque()

# for i in range(H):
#   for j in range(W):
#     if (floor[i][j] == "#"):
#       dist[i][j] = 0
#       que.append((i,j))

# def act():
#   ans = 0
#   while que:
#     (h,w) = que.popleft()
#     num = dist[h][w]
#     for (i, j) in ((0, -1), (0, 1), (-1, 0), (1, 0)):
#         new_h = h+i
#         new_w = w+j
#         if (0 <= new_h and new_h < H and 0 <= new_w and new_w < W and dist[new_h][new_w] == -1):
#           dist[new_h][new_w] = num + 1
#           que.append((new_h,new_w))
#   return num

# print(act())


# from collections import deque

# H, W = map(int, input().split())
# # 入力list
# grid = [list(input()) for _ in range(H)]
# # 値保管用
# dist = [[-1]*W for _ in range(H)]


# # 実行待ちボックス
# black_cells = deque()

# for i in range(H):
#     for j in range(W):
#         if grid[i][j] == "#":
#             dist[i][j] = 0
#             black_cells.append((i, j))


# # (x.y)の周囲4箇所を実行待ちにぶち込んで、1足した値を入れる。
# def dfs():
#     d = 0
#     while black_cells:
#         h, w = black_cells.popleft()
#         d = dist[h][w]
#         for (dx, dy) in ((-1, 0), (1, 0), (0, -1), (0, 1)):
#             new_x = h + dx
#             new_y = w + dy
#             if dist[new_x][new_y] == -1:
#                 dist[new_x][new_y] = d + 1
#                 black_cells.append((new_x, new_y))
#     return d


# print(dfs())

from collections import deque

H, W = map(int, input().split())
# field = [[c for c in input()] + ['#'] for _ in range(H)]
# print(field)
# field.append(['#'] * (W+1))
# print(field)
grid = [list(input()) for _ in range(H)]
dist = [[-1]*W for _ in range(H)]

black_cells = deque()
for h in range(H):
    for w in range(W):
        if grid[h][w] == '#':
            black_cells.append((h, w))
            dist[h][w] = 0


def bfs():
    d = 0
    while black_cells:
        h, w = black_cells.popleft()
        d = dist[h][w]
        for dy, dx in ((1, 0), (0, 1), (-1, 0), (0, -1)):
            new_h = h + dy
            new_w = w + dx
            if not(0 <= new_h < H) or not(0 <= new_w < W):
                continue
            if dist[new_h][new_w] == -1:  # セルが白('.')であるのと同義
                dist[new_h][new_w] = d+1
                black_cells.append((new_h, new_w))
    return d

# 四方向に進む。
# .なら変える。

# 全ての#でBFS()をぶん回す。
