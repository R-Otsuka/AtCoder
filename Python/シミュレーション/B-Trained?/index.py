N = int(input())
an = [int(input()) for i in range(N)]


num = 1
count = 0
for i in range(N):
    num = an[num-1]
    count += 1
    if num == 2:
        print(count)
        exit()
print(-1)
