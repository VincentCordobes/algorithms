#!/bin/python3

import math
import os
import random
import re
import sys


def jumpingOnClouds(c):
    count = 0
    curr = 0
    while curr < len(c) - 1:
        if curr < len(c) - 2 and c[curr + 2] == 0:
            curr += 2
        else:
            curr += 1
        count += 1
    return count


if __name__ == "__main__":
    fptr = open(os.environ["OUTPUT_PATH"], "w")
    n = int(input())
    c = list(map(int, input().rstrip().split()))
    result = jumpingOnClouds(c)
    fptr.write(str(result) + "\n")
    fptr.close()
