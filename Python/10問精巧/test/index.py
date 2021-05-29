N = int(input())
A, B, C = [list(map(int, input().split())) for i in range(3)]

bl = [0] * N
count = 0
for i in C:
    bl[B[i-1]-1] += 1

for i in A:
    count += bl[i-1]
print(count)
# count = 0
# for i in A:
#     count += bl.count(i)
# print(count)

# count = 0
# for i in range(N):
#     for j in range(N):
#         huge = C[j]
#         if 0 <= huge <= N:
#             if A[i] == B[huge-1]:
#                 count += 1
# print(count)
