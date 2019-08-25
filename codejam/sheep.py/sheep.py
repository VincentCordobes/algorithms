#!/usr/bin/env python3
def main():
    t = int(input())
    for i in range(1, t + 1):
        n = int(input())
        res = solve(n)
        print_result(i, res)


def solve(n):
    if n == 0:
        return None
    c = n
    s = set(digits(c))
    while(len(s) < 10):
        c += n
        dig = digits(c)
        for d in dig:
            s.add(d)
    return c


def print_result(i, n):
    if n is None:
        print(f"Case #{i}: INSOMNIA")
    else:
        print(f"Case #{i}: {n}")


def digits(number):
    res = []
    n = number
    while n > 0:
        res.append(n % 10)
        n = n // 10
    return res 


if __name__ == '__main__':
    main()
