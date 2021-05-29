H, W = list(map(int, input().split()))
field = []
for i in range(H):
    field.append(list(input()))

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

for i in range(H):
    for j in range(W):
        if(field[i][j]) == "#":
            flag = False
            for m in range(4):
                x = i+dx[m]
                y = j+dy[m]
                if 0 <= x < H and 0 <= y < W:
                    # 黒塗り判定
                    if field[x][y] == "#":
                        flag = True
                        break
            if flag == False:
                print("No")
                exit()
print("Yes")
