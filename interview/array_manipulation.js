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
 * @param {number} n
 * @param {number[][]} queries
 * @returns {number}
 */
function arrayManipulation(n, queries) {
  const arr = [];
  for (let i = 0; i < n + 1; i++) {
    arr.push(0);
  }

  queries.forEach(([a, b, k]) => {
    arr[a - 1] += k;
    if (b <= n) {
      arr[b] -= k;
    }
  });

  let max = 0;
  let sum = 0;
  arr.forEach(x => {
    sum += x;
    if (sum > max) {
      max = sum;
    }
  });

  return max;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const nm = readLine().split(" ");

  const n = parseInt(nm[0], 10);

  const m = parseInt(nm[1], 10);

  let queries = Array(m);

  for (let i = 0; i < m; i++) {
    queries[i] = readLine()
      .split(" ")
      .map(queriesTemp => parseInt(queriesTemp, 10));
  }

  let result = arrayManipulation(n, queries);

  ws.write(result + "\n");

  ws.end();
}
