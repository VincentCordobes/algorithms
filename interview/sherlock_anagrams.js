"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", _ => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/**
 * @param {string} s
 */
function sherlockAndAnagrams(s) {
  /** @type {string[][]} */
  let subs = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      subs.push(s.substring(i, j).split(""));
    }
  }

  const pairs = new Set();
  let count = 0;
  for (let i = 0; i < subs.length; i++) {
    for (let j = i + 1; j < subs.length; j++) {
      const sub1 = subs[i];
      const sub2 = subs[j];
      if (i !== j && sub1.length === sub2.length) {
        const sub1Count = buildCharCount(sub1);
        const sub2Count = buildCharCount(sub2);
        if (sub1.every(x => sub1Count[x] === sub2Count[x])) {
          if (!pairs.has({ i, j })) {
            pairs.add({ i, j });
            count++;
          }
        }
      }
    }
  }

  return count;
}

function buildCharCount(list) {
  return list.reduce((acc, c) => {
    acc[c] = (acc[c] || 0) + 1;
    return acc;
  }, {});
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const s = readLine();

    let result = sherlockAndAnagrams(s);

    ws.write(result + "\n");
  }

  ws.end();
}
