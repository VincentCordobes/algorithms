#!/bin/python3

import math
import os
import random
import re
import sys
from itertools import groupby


def sockMerchant_1(n, ar):
    """
    First version
    """
    sorted_a = sorted(ar)
    count = 0
    i = 0
    while i < len(ar) - 1:
        first = sorted_a[i]
        second = sorted_a[i + 1]
        if first == second:
            count += 1
            i += 1
        i += 1
    return count


def sockMerchant_2(n, ar):
    """
    Second version
    """
    s = set()
    count = 0
    for c in ar:
        if c in s:
            s.remove(c)
            count += 1
        else:
            s.add(c)
    return count


def sockMerchant(n, ar):
    """
    Third version
    """
    return sum([len(list(items)) // 2 for k, items in groupby(sorted(ar))])


if __name__ == "__main__":
    fptr = open(os.environ["OUTPUT_PATH"], "w")
    n = int(input())
    ar = list(map(int, input().rstrip().split()))
    result = sockMerchant(n, ar)
    fptr.write(str(result) + "\n")
    fptr.close()

# if __name__ == "__main__":
#     print(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))
