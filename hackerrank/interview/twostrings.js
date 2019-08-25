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
 * @param {string} s1
 * @param {string} s2
 */
function twoStrings(s1, s2) {
  let found = false;
  let i = 0;
  while (!found && i < s1.length) {
    const c = s1[i];
    if (s2.indexOf(c) !== -1) {
      found = true;
    }
    i++;
  }

  return found ? "YES" : "NO";
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const s1 = readLine();

    const s2 = readLine();

    let result = twoStrings(s1, s2);

    ws.write(result + "\n");
  }

  ws.end();
}
