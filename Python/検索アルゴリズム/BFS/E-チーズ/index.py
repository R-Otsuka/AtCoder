from collections import deque
import copy


H, W, N = map(int, input().split())
map = [list(input()) for i in range(H)]
# 通過履歴、都度更新
dist = [[-1]*W for i in range(H)]
numHash = {}

for i in range(H):
    for j in range(W):
        # ゴール後に、スタート+0以外の所を全て-1に戻す作業。
        if not map[i][j] == ".":
            if (map[i][j]) == "X":
                dist[i][j] = -10 # 壁
            elif (map[i][j]) == "S":
                numHash[0] = (i,j)
            else:
                numHash[int(map[i][j])] = (i,j)

# print(numList)
# print(map)
# print(dist)


def bfs(n, total):
    # s,tが開始地点、nはtotal移動距離
    # ここでスタートのdistとque.appendをする。
    sx, sy = numHash[n]
    gx, gy = numHash[n+1]
    que = deque()
    _dist = copy.deepcopy(dist) #変更行
    _dist[sx][sy] = total
    que.append((sx, sy))
    ans = total
    while que:
        (i, j) = que.popleft()
        for (dx, dy) in ((0, 1), (0, -1), (1, 0), (-1, 0)):
            new_i = i + dx
            new_j = j + dy
            if not 0 <= new_i < H or not 0 <= new_j < W or _dist[new_i][new_j] == -10 or _dist[new_i][new_j] >= 0:
                continue
            ans = _dist[i][j]
            if new_i == gx and new_j == gy:
                if n == N-1:
                    return ans+1
                return bfs(n+1, ans+1)
            que.append((new_i, new_j))
            _dist[new_i][new_j] = ans + 1

print(bfs(0,0))