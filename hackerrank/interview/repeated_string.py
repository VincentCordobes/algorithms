#!/bin/python3

import math
import os
import random
import re
import sys


def repeated_string(s, n):
    s_count, left = divmod(n, len(s))
    return s.count("a") * s_count + s[:left].count("a")


if __name__ == "__main__":
    fptr = open(os.environ["OUTPUT_PATH"], "w")
    s = input()
    n = int(input())
    result = repeated_string(s, n)
    fptr.write(str(result) + "\n")
    fptr.close()
