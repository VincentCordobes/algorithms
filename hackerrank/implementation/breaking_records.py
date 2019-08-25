#!/bin/python3
import math
import os
import random
import re
import sys


def breakingRecords(scores):
    highest_count = 0
    lowest_count = 0
    curr_min = scores[0]
    curr_max = scores[0]
    for x in scores[1:]:
        if x < curr_min:
            curr_min = x
            lowest_count += 1
        elif x > curr_max:
            curr_max = x
            highest_count += 1
    return [highest_count, lowest_count]


if __name__ == "__main__":
    fptr = open(os.environ["OUTPUT_PATH"], "w")

    n = int(input())

    scores = list(map(int, input().rstrip().split()))

    result = breakingRecords(scores)

    fptr.write(" ".join(map(str, result)))
    fptr.write("\n")

    fptr.close()
