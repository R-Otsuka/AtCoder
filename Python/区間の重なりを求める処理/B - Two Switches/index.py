def mod(x, k):
    return x % k


N = int(input())
ans = 1
k = 1000000000+7
for i in range(1, N+1):
    ans = mod(ans*i, k)
print(ans)
