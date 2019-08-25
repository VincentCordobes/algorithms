function solution(A) {
  const sorted = A.sort((a, b) => a - b);

  for (let i = 0; i < sorted.length - 1; i += 2) {
    const first = sorted[i];
    const second = sorted[i + 1];
    if (first !== second) {
      return first;
    }
  }
  return sorted[sorted.length - 1];
}
