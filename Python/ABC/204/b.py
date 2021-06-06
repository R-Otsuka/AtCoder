N = int(input())
ans = 0

list = list(map(int, input().split()))
for i in list:
    if i > 10:
        ans += i - 10

print(ans)
