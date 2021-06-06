# def go(i, n):
#     # 次の関数を回すかどうか
#     next = False
#     _i = i+n
#     _n = 0
#     # i < A <= i+nを満たすA地点にいる人からもらう。
#     friend = True
#     while friend:
#         if lists and lists[0][0] <= _i:
#             _n += lists[0][1]
#             del lists[0]
#             next = True
#         else:
#             friend = False

#     # next = Falseなら終わり。
#     if next == False:
#         print(_i)
#         exit()
#     return go(_i, _n)


# N, K = map(int, input().split())
# lists = []
# for i in range(N):
#     lists.append(list(map(int, input().split())))
# lists = sorted(lists, key=lambda x: x[0])
# I = 0
# # ある金で進む。
# go(I, K)

N, K = map(int, input().split())
lists = []
for i in range(N):
    lists.append(list(map(int, input().split())))
lists = sorted(lists, key=lambda x: x[0])

ans = K
for a in lists:
    if(a[0] > ans):
        break
    ans += a[1]
print(ans)
