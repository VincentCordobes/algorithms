#!/usr/bin/env python3
import itertools


def main():
    t = int(input())
    for i in range(1, t + 1):
        n = input()
        nb_flip = solve(n)
        print_result(i, nb_flip)


def solve(n):
    return None

def get_position(K, C, S):
    positions = []

    possibilities = generate_possible_artworks(K, C).sort()
    nb_possibilities = len(possibilities)

    ambigous_per_col = get_ambigous_per_col(possibilities).sort()
    min_ambigous = ambigous_per_col[0]

    if min_ambigous > S:
        return None

    for i, ambigous in ambigous_per_col:
        if ambigous == min_ambigous:
            positions.append(i)

# blablabla





def get_ambigous_per_col(possibilities):
    if not possibilities:
        return 0

    nb_possibilities = len(possibilities)
    K = len(possibilities[0])

    nb_ambigous_per_col = [0] * K
    for rowIdx in range(0, K):
        for colIdx in range(0, nb_possibilities):
            if possibilities[colIdx][rowIdx] == 'L':
                nb_ambigous_per_col[rowIdx] += 1
    return nb_ambigous_per_col


def generate_artwork(orig_seq, C):
    temp_artwork = orig_seq
    for i in range(0, C-1):
        temp_artwork = map_tiles(orig_seq, temp_artwork)
    return temp_artwork


def generate_possible_artworks(K, C):
    return [generate_artwork(seq, C) for seq in generate_possible_seq(K)]


def generate_possible_seq(k):
    return [f"{a}{b}" for a, b in itertools.product(['G', 'L'], repeat=k)]


def map_tiles(original_seq, seq):
    mapped_tiles = ''
    for t in seq:
        mapped_tiles = mapped_tiles + map_tile(original_seq, t)
    return mapped_tiles


def map_tile(original_seq, tile):
    k = len(original_seq)
    return original_seq if tile == 'L' else 'G' * k


def print_result(i, n):
    if n is None:
        print(f"Case #{i}: INSOMNIA")
    else:
        print(f"Case #{i}: {n}")


if __name__ == '__main__':
    main()
