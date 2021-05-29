# A, B, C, X = [int(input()) for i in range(4)]
# print(sum(500*a+100*b+50*c == X for a in range(A+1)
#       for b in range(B+1) for c in range(C+1)))

# a, b, c, x = [int(input()) for i in range(4)]

# A, B, C = [1, 2, 3]
# x = [[a, b, c] for a in range(A+1) for b in range(B+1) for c in range(C+1)]
# print(x)

# N, A, B = map(int, input().split())
# list = [i for i in range(1, N+1) if A <= sum(map(int, str(i))) <= B]
# print(list)

# num = int(input())
# list = list(map(int, input().split()))
# list.sort(reverse=True)

# a = sum(list[0::2])
# b = sum(list[1::2])

# print(a-b)

# m, n = map(int, input().split())
# x, y = m/1000, n/1000

# for i in range(x+1):
#     for j in range(x+1-i):
#         z = x-i-j
#         if 10*i+5*j+1*z == y:
#             print(1000*i, 1000*j, 1000*z)
#             exit()
# print(-1, -1, -1)
n, y = (int(i)for i in input().split())
r = []
a = (y % 5000)//1000
print(a)
