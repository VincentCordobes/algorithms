/**
 * @param {Array<number>} A
 * @param {number} K
 */
function solution(A, K) {
  if (!A.length) {
    return [];
  }

  if (K === 0) {
    return A;
  }

  const last = A[A.length - 1];
  return solution([last, ...A.slice(0, A.length - 1)], K - 1);
}
