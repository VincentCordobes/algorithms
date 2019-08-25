#!/usr/bin/env python3
def main():
    t = int(input())
    for i in range(1, t + 1):
        N, J = [int(s) for s in input().split(' ')]
        res = solve(N, J)
        print_result(i, res)


def solve(N, J):
    return generate_jam_coins(N, J)


# type jam_coin: int[]

def generate_jam_coins(N, J):
    jam_coins = []
    i = 0
    while len(jam_coins) < J:
        jam_coin = generate_jam_coin(i, N)
        ok, divisors = get_divisors(jam_coin)
        if (ok):
            jam_coins.append((jam_coin, divisors))
        i += 1
    return jam_coins


def get_divisors(jam_coin):
    divisors = []
    for base in range(2, 11):
        jam_coin_value = get_interpretation(jam_coin, base)
        divisor = get_divisor(jam_coin_value)
        if divisor is not None:
            divisors.append(divisor)
        else:
            return (False, [])
    return (True, divisors)


def get_divisor(number):
    primes = [2, 3, 5, 7, 11, 13, 17, 19, 23]
    for divisor in primes:
        if is_divisor(number, divisor):
            return divisor
    return None


# i should be a number in range [0..N-2[
def generate_jam_coin(i, N):
    variable_digits = bin(i)[2:]

    # add missing zero on the left
    missing_zeros = (N-2) - len(variable_digits)
    if missing_zeros > 0:
        variable_digits = ('0' * missing_zeros) + variable_digits
    return '1' + variable_digits + '1'


def is_divisor(n, d):
    return (n % d) == 0


def get_interpretation(jam_coin, base):
    res = 0
    i = 0
    while i < len(jam_coin):
        c = jam_coin[len(jam_coin) - 1 - i]
        if c == '1':
            res += base ** i
        i += 1
    return res


def print_result(i, jam_coin_with_divisors):
    print(f"Case #{i}:")
    for jam_coin, divisors in jam_coin_with_divisors:
        formatted_jam_coin = ''.join([str(j) for j in jam_coin])
        formatted_divisors = ' '.join([str(d) for d in divisors])
        print(f"{formatted_jam_coin} {formatted_divisors}")


if __name__ == '__main__':
    main()
