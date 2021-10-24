from collections import deque
# start地点から、上下左右に移動する。
# 移動先が壁じゃなければqueにぶち込む、壁(数字)にする。
# 必要なもの、壁map・数字のresultマップ・que

H, W = map(int, input().split())
sx, sy = map(int, input().split())
gx, gy = map(int, input().split())
map = [list(input()) for i in range(H)]
# 履歴かつ、answer保存用
dist = [[-1]*W for i in range(H)]
que = deque()
ans = 0
# i行目、J列目
for i in range(H):
    for j in range(W):
        if map[i][j] == "#":
            dist[i][j] = 0 # 壁
        if i == sx-1 and j == sy-1:
            dist[i][j] = 0 # start
            que.append((i,j))


# queから取得、そいつの値をdistから取得、上下左右に移動して新規判定、queに入れてdistを更新
def bfs():
    _ans = 0
    while que:
        (i, j) = que.popleft()
        _ans = dist[i][j]
        for (dx, dy) in ((0, 1), (0, -1), (1, 0), (-1, 0)):
            new_i = i + dx
            new_j = j + dy
            if new_i == gx-1 and new_j == gy-1:
                return _ans + 1
            if not 0 <= new_i < H or not 0 <= new_j < W or not dist[new_i][new_j] == -1:
                continue
            que.append((new_i, new_j))
            dist[new_i][new_j] = _ans + 1
print(bfs())


# from collections import deque
# R, C = map(int, input().split())
# sx, sy = map(int, input().split())
# gx, gy = map(int, input().split())

# c = [list(input()) for _ in range(R)]
# dist = [[-1]*C for _ in range(R)]

# dot_cell = deque()
# dot_cell.append((sy-1, sx-1))

# dist[sx-1][sy-1] = 0

# while dot_cell:
#     w, h = dot_cell.popleft()
#     num = dist[w][h]
#     for x, y in ((-1, 0), (1, 0), (0, -1), (0, 1)):
#         dx = x+w
#         dy = y+h

#         if 0 > dx or dx >= R or 0 > dy or dy >= C or dist[dx][dy] != -1 or c[dx][dy] == "#":
#             continue
#         if dx == gx - 1 and dy == gy - 1:
#             print(num+1)
#             exit()
#         dot_cell.append((dx, dy))
#         dist[dx][dy] = num + 1

        # from collections import deque

        # R, C = map(int, input().split())
        # sy, sx = map(int, input().split())
        # gy, gx = map(int, input().split())

        # # 最短距離リスト
        # c = [list(input()) for _ in range(R)]
        # dist = [[-1] * C for _ in range(R)]

        # dot_cell = deque()
        # dot_cell.append((sy-1, sx-1))

        # # 現在地は0
        # dist[sy-1][sx-1] = 0

        # while dot_cell:
        #     # 一番古いデータを取り出す。
        #     w, h = dot_cell.popleft()
        #     # 値を取り出す。
        #     d = dist[w][h]

        #     for x, y in ((1, 0), (0, 1), (-1, 0), (0, -1)):
        #         new_x = w + x
        #         new_y = h + y

        #         # 壁ならリターン
        #         if new_x < 0 or new_y < 0 or new_x >= R or new_y >= C or c[new_x][new_y] == '#':
        #             continue
        #         # 壁ではないかつ、新規の場合は今いる場所の値(d)に1足したものを保存
        #         if dist[new_x][new_y] == -1:
        #             dist[new_x][new_y] = d + 1
        #             dot_cell.append((new_x, new_y))
        # print(dist[gy-1][gx-1])

        # R, C = map(int, input().split())
        # sy, sx = map(int, input().split())
        # gy, gx = map(int, input().split())

        # c = [list(input()) for _ in range(R)]
        # dist = [[-1] * C for _ in range(R)]

        # dist[sy - 1][sx - 1] = 0

        # dot_cell = deque()
        # dot_cell.append((sy-1, sx-1))
        # # for i in range(R):
        # # for j in range(C):
        # #  if c[i][j] == '#':
        # #   dist[i][j] = 0
        # # else:
        # # dot_cell.append((i, j))

        # # print(*dist, sep='\n')
        # # print(dot_cell)
        # while dot_cell:
        #     w, h = dot_cell.popleft()
        #     d = dist[w][h]
        #     # print(w, h, d)
        #     # print(d)
        #     for x, y in ((1, 0), (0, 1), (-1, 0), (0, -1)):
        #         new_x = w + x
        #         new_y = h + y

        #         if new_x < 0 or new_y < 0 or new_x >= R or new_y >= C or c[new_x][new_y] == '#':
        #             #print(new_x, new_y)
        #             continue

        #         if dist[new_x][new_y] == -1:
        #             dist[new_x][new_y] = d + 1
        #             dot_cell.append((new_x, new_y))

        # # print(*dist, sep='\n')
        # # print(*c, sep='\n')

        # print(dist[gy - 1][gx - 1])
