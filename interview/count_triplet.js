"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function(inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function() {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/**
 * @param {number[]}
 * @param {number}
 */
function countTriplets(arr, r) {
  let m2 = defaultDict();
  let m3 = defaultDict();
  let count = 0;
  arr.forEach(k => {
    // We've found new triplets!!
    // Indeed, there was m3[k] triplets waiting for you k!
    count += m3[k];
    m3[k * r] += m2[k];
    m2[k * r] += 1;
  });
  return count;
}

const defaultDict = (d = {}) =>
  new Proxy(d, {
    get: (obj, prop) => (prop in obj ? obj[prop] : 0)
  });

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const nr = readLine()
    .replace(/\s+$/g, "")
    .split(" ");

  const n = parseInt(nr[0], 10);

  const r = parseInt(nr[1], 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map(arrTemp => parseInt(arrTemp, 10));

  const ans = countTriplets(arr, r);

  ws.write(ans + "\n");

  ws.end();
}
