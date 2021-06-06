N, K = map(int, input().split())

sum100 = 0
sum1 = 0

for i in range(1, N+1):
    sum100 += i
sum100 *= K*100

for j in range(1, K+1):
    sum1 += j
sum1 *= N

print(sum100+sum1)
