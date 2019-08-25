#!/bin/python3

import math
import os
import random
import re
import sys


KO = "Too chaotic"


def minimum_bribes(q):
    a = q[:]
    d = dict()
    changed = True
    while changed:
        changed = False
        for i in range(len(q) - 1):
            if a[i] > a[i + 1]:
                count = d.get(a[i])
                if count == 2:
                    return print(KO)
                else:
                    d[a[i]] = (count or 0) + 1
                a[i], a[i + 1] = a[i + 1], a[i]
                changed = True

    print(sum(d.values()))


# minimumBribes([2, 1, 5, 3, 4])
# minimumBribes([2, 5, 1, 3, 4])
# minimumBribes([2, 1, 3, 4, 5])
minimum_bribes([1, 2, 5, 3, 7, 8, 6, 4])

if __name__ == "__main__":
    t = int(input())
    for t_itr in range(t):
        n = int(input())
        q = list(map(int, input().rstrip().split()))
        minimum_bribes(q)
