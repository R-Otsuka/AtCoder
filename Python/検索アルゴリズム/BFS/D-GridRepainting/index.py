from collections import deque

H, W = list(map(int, input().split()))
map = [list(input()) for i in range(H)]

dist = [[0]*W for i in range(H)]
que = deque()

whiteNum = 0

# 初期状態を作る
for i in range(H):
  for j in range(W):
    if map[i][j] == ".":
      dist[i][j] = -1
      whiteNum += 1


ans = 0
dist[0][0] = 0
que.append((0, 0))




def bfs():
  while que:
    (i, j) = que.popleft()
    _ans = dist[i][j]
    for (m, n) in ((-1, 0), (1, 0), (0, -1), (0, 1)):
      new_i = i + m
      new_j = j + n
      if 0 <= new_i < H and 0 <= new_j < W:
        if dist[new_i][new_j] == -1:
          que.append((new_i, new_j))
          dist[new_i][new_j] = _ans + 1
        if new_i == H-1 and new_j == W-1:
          ans = _ans + 1
          return ans
  return -1


ans = bfs()
if ans == -1:
  print(-1)
else:
  print(whiteNum - ans - 1)