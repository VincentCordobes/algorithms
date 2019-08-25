from typing import List


def mergesort(a: List[int]) -> List[int]:
    if len(a) == 0:
        return []
    if len(a) == 1:
        return a

    splitAt = len(a) // 2
    first = a[0:splitAt]
    second = a[splitAt:]
    return merge(mergesort(first), mergesort(second))


def merge(a: List[int], b: List[int]) -> List[int]:
    if len(a) == 0:
        return b
    if len(b) == 0:
        return a

    if a[0] <= b[0]:
        return [a[0]] + merge(a[1:], b)
    else:
        return [b[0]] + merge(a, b[1:])


print(mergesort([4, 4, 8, 12, 2, 9, 5, 1]))
print(mergesort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))
