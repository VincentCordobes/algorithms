function solution(A) {
  return A.sort((a, b) => a - b).reduce((smallest, e) => {
    if (e === smallest) {
      return e + 1;
    } else {
      return smallest;
    }
  }, 1);
}
