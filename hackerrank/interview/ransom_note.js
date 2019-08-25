"use strict";

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
 * @param {string[]} magazine
 * @param {string[]} note
 */
function checkMagazine(magazine, note) {
  const wordOcc = magazine.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});

  for (let i = 0; i < note.length; i++) {
    const word = note[i];

    const wordInMag = wordOcc[word];
    if (!wordInMag) {
      console.log("No");
      return;
    } else {
      wordOcc[word]--;
    }
  }

  console.log("Yes");
}

function main() {
  const mn = readLine().split(" ");

  const m = parseInt(mn[0], 10);

  const n = parseInt(mn[1], 10);

  const magazine = readLine().split(" ");

  const note = readLine().split(" ");

  checkMagazine(magazine, note);
}
