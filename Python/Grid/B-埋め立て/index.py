import copy

map = [list(input()) for i in range(10)]

def dfs(i,j):
    newMap[i][j] = "x"
    for (dx, dy) in ((-1,0), (1,0), (0,-1), (0,1)):
        nx = i + dx
        ny = j + dy
        if 0 <= nx < 10 and 0 <= ny < 10 and newMap[nx][ny] == "o":
            newMap[nx][ny] = "x"
            dfs(nx, ny)

for i in range(10):
    for j in range(10):
        if map[i][j] == "x":
            newMap = copy.deepcopy(map)
            dfs(i, j)
            flag = True
            for m in range(10):
                for n in range(10):
                    if newMap[m][n] == "o":
                        flag = False
            if flag:
                print("YES")
                exit()
print("NO")