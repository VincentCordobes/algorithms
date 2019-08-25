#!/usr/bin/env python3


def main():
    t = int(input())
    for i in range(1, t + 1):
        n = input()
        nb_flip = solve(n)
        print_result(i, nb_flip)


# we may optimize the 2 while loop by removing the if check_ok..
def solve(n):
    t = n
    i = len(n)
    nb_flip = 0
    while not check_ok(t):
        i = find_end_index(t)
        t = flip_all(t[: i + 1])
        nb_flip += 1
    return nb_flip


def find_end_index(t):
    i = len(t) - 1
    while t[i] == "+" and i >= 0:
        i = i - 1
    return i


def check_ok(n):
    ok = True
    i = 0
    while ok and i < len(n):
        if n[i] == "-":
            ok = False
        i += 1
    return ok


def flip_all(pancakes):
    return "".join([flip(c) for c in pancakes])


def flip(pancake):
    return "+" if pancake == "-" else "-"


def print_result(i, n):
    print(f"Case #{i}: {n}")


if __name__ == "__main__":
    main()
