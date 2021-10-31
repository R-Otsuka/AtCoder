N = int(input())
row = list(input())

# 一番左を選択、累積和を蓄積
min = row[1:N].count("E")
cum = min

for i in range(1,N):
  if row[i-1] == "W":
    cum += 1
  if row[i] == "E":
    cum -= 1

  if cum < min:
    min = cum

print(min)