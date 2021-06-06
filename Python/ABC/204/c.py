N, M = map(int, input().split())

lists = {}
for i in range(M):
    x = list(map(int, input().split()))
    if x[0] in lists:
        lists[x[0]] += [x[1]]
    else:
        lists[x[0]] = [x[1]]

# lists = sorted(lists, key=lambda x: x[0])


# nから派生する街番号を追加して、listを返す。
def search(n, ansLists):
    if n in lists:
        for i in lists[n]:
            if not(i in ansLists):
                ansLists.append(i)
                search(i, ansLists)
        return ansLists
    else:
        return ansLists


def judge(n):
    ansLists = []
    ansLists = search(n, ansLists)
    return(ansLists)


ans = 0
for i in range(N):
    l = judge(i+1)
    if i+1 in l:
        l.remove(i+1)
    ans += len(l)

ans += N
print(ans)
