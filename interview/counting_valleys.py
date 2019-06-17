#!/bin/python3
import math
import os
import random
import re
import sys


def countingValleys(n, s):
    valley_count = 0
    level = 0
    for step in s:
        if step == "D":
            if level == 0:
                valley_count += 1
            level -= 1
        elif step == "U":
            level += 1
    return valley_count


if __name__ == "__main__":
    fptr = open(os.environ["OUTPUT_PATH"], "w")
    n = int(input())
    s = input()
    result = countingValleys(n, s)
    fptr.write(str(result) + "\n")
    fptr.close()
