// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  const binary = Number(N)
    .toString(2)
    .split("");

  let aux = (binary, max, count) => {
    const [first, second, ...rest] = binary;

    if (!first) {
      return max;
    }

    if (first === "1") {
      const newMax = count > max ? count : max;
      return second === "0"
        ? aux(rest, newMax, 1)
        : aux([second, ...rest], newMax, 0);
    } else {
      return count > 0
        ? aux([second, ...rest], max, count + 1)
        : aux([second, ...rest], max, 0);
    }
  };

  return aux(binary, 0, 0);
}
