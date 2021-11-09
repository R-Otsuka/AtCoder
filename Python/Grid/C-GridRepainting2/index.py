H, W = list(map(int, input().split()))
map = [list(input()) for i in range(H)]

flag = True

for i in range(H):
  for j in range(W):
    if map[i][j] == "#":
      judge = False
      for (m, n) in ((-1, 0), (1, 0), (0, -1), (0, 1)):
        new_i = i + m
        new_j = j + n
        if 0 <= new_i < H and 0 <= new_j < W:
          if map[new_i][new_j] == "#":
            judge = True
      if not judge:
        flag = False

if flag:
  print("Yes")
else:
  print("No")










# H, W = list(map(int, input().split()))
# field = []
# for i in range(H):
#     field.append(list(input()))

# dx = [-1, 1, 0, 0]
# dy = [0, 0, -1, 1]

# for i in range(H):
#     for j in range(W):
#         if(field[i][j]) == "#":
#             flag = False
#             for m in range(4):
#                 x = i+dx[m]
#                 y = j+dy[m]
#                 if 0 <= x < H and 0 <= y < W:
#                     # 黒塗り判定
#                     if field[x][y] == "#":
#                         flag = True
#                         break
#             if flag == False:
#                 print("No")
#                 exit()
# print("Yes")
