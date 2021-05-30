len = list(str(input()))

num1 = len[0]
num = 7-int(num1)
del len[0]

n = 3
for i in range(2**n):
    total = 0
    for j in range(n):
        if ((i >> j) & 1):
            total += int(len[j])
        else:
            total -= int(len[j])
    if total == num:
        ans = num1
        for j in range(n):
            if ((i >> j) & 1):
                ans = ans+"+"+len[j]
            else:
                ans = ans+"-"+len[j]
        ans = ans+"=7"
        print(ans)
        exit()
