const fs = require('fs');

(async function main() {
  let testNumbers = [];
  testNumbers = await fs.readFileSync('in', 'utf8').split('\n').filter(Boolean);
  testNumbers.forEach((n, i) => {
    print((i+1), compute(n));
  })
});

const compute = (input) => tryToSleep(new Set(), input, 1);

const tryToSleep = (allSeenDigits, n, i) => {
  if (n == 0) return null;
  const name = generateName(n, i);
  const seenDigitInCurrentName = getSeenDigits(name);

  seenDigitInCurrentName.forEach(v => allSeenDigits.add(v));
  if (doIHaveAllDigits(allSeenDigits)) {
    return n*i;
  }
  return tryToSleep(allSeenDigits, n, i+1);
}

const doIHaveAllDigits = (allDigits) =>
  (allDigits.size === 10);

const generateName = (n, i) => i * Number(n);

const getSeenDigits = (n) =>
  n.toString().split('').map(d => Number(d));


function print(testCaseNumber, n) {
  if (n === null) {
    console.log(`Case #${testCaseNumber}: INSOMNIA`);
  } else {
    console.log(`Case #${testCaseNumber}: ${n}`);
  }
}

module.exports = {
  getSeenDigits,
  generateName,
  doIHaveAllDigits,
  tryToSleep,
  compute,
};
