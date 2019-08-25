#!/bin/python3

import math
import os
import random
import re
import sys


def hourglass_sum(arr):
    max_sum = float("-inf")
    for i in range(4):
        for j in range(4):
            end = j + 3

            # The hourglass
            a, b, c = arr[i][j:end]
            _, d, _ = arr[i + 1][j:end]
            e, f, g = arr[i + 2][j:end]

            s = a + b + c + d + e + f + g
            if s > max_sum:
                max_sum = s
    return max_sum


if __name__ == "__main__":
    fptr = open(os.environ["OUTPUT_PATH"], "w")
    arr = []
    for _ in range(6):
        arr.append(list(map(int, input().rstrip().split())))
    result = hourglass_sum(arr)
    fptr.write(str(result) + "\n")
    fptr.close()
