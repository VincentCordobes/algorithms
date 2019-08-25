// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)

  let stack = [];

  const mapping = {
    "{": "}",
    "[": "]",
    "(": ")"
  };

  const opening = Object.keys(mapping);

  for (let i = 0; i < S.length; i++) {
    const c = S[i];
    if (opening.includes(c)) {
      stack.push(c);
    } else {
      const e = stack.pop();
      if (mapping[e] !== c) {
        return 0;
      }
    }
  }
  return !stack.length ? 1 : 0;
}
