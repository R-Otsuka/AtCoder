len = list(map(int, list(str(input()))))

n = 3
A = len[0]
for i in range(2**n):
    text=str(A)
    ans = A
    for j in range(n):
        if (i >> j) & 1:
            ans += len[j+1]
            text = text + "+" + str(len[j+1])
        else:
            ans -= len[j+1]
            text = text + "-" + str(len[j+1])
    if ans == 7:
        text += "=7"
        print(text)
        exit()
