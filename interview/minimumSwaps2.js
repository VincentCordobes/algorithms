// https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

/**
 * @param {number[]} arr
 */
function minimumSwaps(arr) {
  let res = [...arr];
  let count = 0;
  for (let i = 0; i < res.length - 1; i++) {
    let j = i;
    while (j < res.length && i + 1 !== res[j]) {
      j++;
    }

    if (i !== j) {
      swap(res, i, j);
      count++;
    }
  }

  return count;
}

function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function range(sizeOrStart, end) {
  if (end === undefined) {
    const size = sizeOrStart;
    return [...Array(size).keys()];
  } else {
    const start = sizeOrStart;
    return [...Array(end - start).keys()].map(i => i + start);
  }
}

const e = range(Math.pow(10, 5)).reverse();
console.log(minimumSwaps(e));

// console.log(minimumSwaps([4, 3, 1, 2]));
// console.log(minimumSwaps([4, 3, 1, 2]) === 3);
