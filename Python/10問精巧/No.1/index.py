# a,b=map(int,input().split())
# print("Even" if a*b%2 == 0 else "Odd")


a, b = map(int, input().split())

if a*b % 2 == 0:
    print("Even")
else:
    print("Odd")
