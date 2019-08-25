// Naive solution. Fail performances tests
// Complexity: O(n x n)
function solution1(A) {
  return range(1, A.length).reduce((min, index) => {
    const firstSum = A.slice(0, index).reduce(add, 0);
    const secondSum = A.slice(index, A.length).reduce(add, 0);
    const diff = Math.abs(firstSum - secondSum);

    return diff < min ? diff : min;
  }, +Infinity);
}

function solution(A) {
  let left = 0;
  let right = A.reduce(add);

  let min = +Infinity;
  for (let i = 0; i < A.length - 1; i++) {
    const e = A[i];

    left += e;
    right -= e;

    const diff = Math.abs(left - right);

    min = diff < min ? diff : min;
  }

  return min;
}

function add(a, b) {
  return a + b;
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
