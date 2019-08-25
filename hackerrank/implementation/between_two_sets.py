#!/bin/python3

import os


def getTotalX1(a, b):
    """
    First version
    """
    max_a = max(a)
    min_b = min(b)
    integers = []

    i = 1
    curr = 0
    while curr < min_b:
        curr = i * max_a
        integers.append(curr)
        i += 1

    integers = [i for i in integers if all([i % j == 0 for j in a])]
    integers_factor_of_b = [i for i in integers if all([j % i == 0 for j in b])]

    distincts = list(set(integers_factor_of_b))
    return len(distincts)


def getTotalX(a, b):
    """
    Second version
    """
    count = 0
    for i in range(1, 101):
        if all([i % ai == 0 for ai in a]) and all([bi % i == 0 for bi in b]):
            count += 1
    return count


if __name__ == "__main__":
    f = open(os.environ["OUTPUT_PATH"], "w")
    nm = input().split()
    n = int(nm[0])
    m = int(nm[1])
    a = list(map(int, input().rstrip().split()))
    b = list(map(int, input().rstrip().split()))
    total = getTotalX(a, b)
    f.write(str(total) + "\n")
    f.close()
