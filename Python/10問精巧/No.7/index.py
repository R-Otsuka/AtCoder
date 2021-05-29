N = int(input())
L = list(int(input()) for i in range(N))

L.sort()
UL = list(set(L))
print(len(UL))
