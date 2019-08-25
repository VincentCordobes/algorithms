#!/bin/python3
import os


def birthday(s, d, m):
    count = 0
    for i in range(len(s)):
        stop = i + m
        if sum(s[i:stop]) == d:
            count += 1
    return count


if __name__ == "__main__":
    print(birthday([2, 3], 2, 1))

# if __name__ == "__main__":
#     fptr = open(os.environ["OUTPUT_PATH"], "w")
#     n = int(input().strip())
#     s = list(map(int, input().rstrip().split()))
#     dm = input().rstrip().split()
#     d = int(dm[0])
#     m = int(dm[1])
#     result = birthday(s, d, m)
#     fptr.write(str(result) + "\n")
#     fptr.close()
