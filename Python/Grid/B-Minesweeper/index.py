# N, H = list(map(int, input().split()))
# Square1 = []
# dx = [-1, 0, 1, -1, 1, -1, 0, 1]
# dy = [-1, -1, -1, 0, 0, 1, 1, 1]

# for _ in range(0, N):
#   row = []
#   for s in input():
#     row.append(s)
#   Square1.append(row)

# for i in range(0, N):
#   for j in range(0, H):
#     if Square1[i][j] == "#":
#       continue
#     num = 0
#     for d in range(0, 8):
#       ni = i + dx[d]
#       nj = j + dy[d]

#       if nj < 0 or H <= nj:
#         continue
#       if ni < 0 or N <= ni:
#         continue
#       if Square1[ni][nj] == "#":
#         num +=1
#     Square1[i][j] = num
# ans = ""
# for i in range(0, N):
#   ans = "".join(map(str, Square1[i]))
#   print(ans)


H, W = map(int, input().split())
dx = [-1, 0, 1, -1, 1, -1, 0, 1]
dy = [-1, -1, -1, 0, 0, 1, 1, 1]
l = []
for i in range(H):
    l.append(list(input()))

for i in range(H):
    for j in range(W):
        if l[i][j] == ".":
            count = 0
            for m in range(8):
                di = i + dx[m]
                dj = j + dy[m]
                if 0 <= di < H and 0 <= dj < W:
                    if l[di][dj] == "#":
                        count += 1
            l[i][j] = str(count)
for i in range(H):
    print("".join(l[i]))
