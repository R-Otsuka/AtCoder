n = int(input())
list = [int(input()) for i in range(n)]
dist =[-1 for i in range(n)]

def judge():
  num = 1
  dist[0] = 0
  count = 0
  flag = True
  while flag:
    count += 1
    new_num = list[num-1]
    if dist[new_num - 1] == 0:
      return -1
    if new_num == 2:
      return count
    dist[new_num-1] = 0
    num = new_num
print(judge())

