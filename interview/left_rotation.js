"use strict";

// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", function() {
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
 * @param {number[]} a
 * @param {number} d rotation count
 */
function rotLeft(a, d) {
  const toMove = a.slice(0, d);
  return a.slice(d).concat(toMove);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  const nd = readLine().split(" ");
  const n = parseInt(nd[0], 10);
  const d = parseInt(nd[1], 10);
  const a = readLine()
    .split(" ")
    .map(aTemp => parseInt(aTemp, 10));
  const result = rotLeft(a, d);
  ws.write(result.join(" ") + "\n");
  ws.end();
}
