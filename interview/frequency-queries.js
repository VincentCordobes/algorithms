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
 * @param {Array<[number, number]>} queries
 * @returns {number[]}
 */
function freqQuery(queries) {
  let res = [];
  let freq = defaultDict();
  let count = defaultDict();
  for (let qi = 0; qi < queries.length; qi++) {
    const [cmd, x] = queries[qi];

    if (cmd === 1) {
      count[freq[x]]--;
      setValue(x, x => x + 1, freq);
      count[freq[x]]++;
    }

    if (cmd === 2) {
      if (freq[x] > 0) {
        count[freq[x]]--;
        freq[x]--;
        count[freq[x]]++;
      }
    }

    if (cmd === 3) {
      const found = count[x] > 0;
      res.push(found ? 1 : 0);
    }
  }
  return res;
}

const defaultDict = (d = {}) =>
  new Proxy(d, {
    get: (obj, prop) => (prop in obj ? obj[prop] : 0)
  });

function setValue(key, f, dict) {
  dict[key] = f(dict[key] || 0);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine().trim(), 10);

  let queries = Array(q);

  for (let i = 0; i < q; i++) {
    queries[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map(queriesTemp => parseInt(queriesTemp, 10));
  }

  const ans = freqQuery(queries);

  ws.write(ans.join("\n") + "\n");

  ws.end();
}
