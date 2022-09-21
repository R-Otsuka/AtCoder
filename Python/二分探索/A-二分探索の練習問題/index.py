import math

N, K = map(int, input().split())
map = list(map(int, input().split()))
min = 0 # ngMin
max = N - 1 # okMax

if map[min] >= K:
  print(min)
  exit(min)
if map[max] < K:
  print(-1)
  exit()

while max - min > 1:
  num = math.ceil((max + min) / 2)
  if map[num] >= K:
    max = num
  else:
    min = num

print(max)