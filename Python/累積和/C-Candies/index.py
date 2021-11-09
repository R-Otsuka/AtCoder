N = int(input())
l1 = list(map(int, input().split()))
l2 = list(map(int, input().split()))
max = 0
for i in range(N):
  total = sum(l1[0:i+1]) + sum(l2[i:N])
  if total > max:
    max = total

print(max)