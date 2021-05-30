N = int(input())
A = list(map(int, input().split()))
B = list(map(int, input().split()))

ans = 0
for i in range(N):
    total = sum(A[:i+1])+sum(B[i:])
    if ans < total:
        ans = total
print(ans)
