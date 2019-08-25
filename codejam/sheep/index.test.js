const main = require('./counting_sheep');

test('getSeenDigits', () => {
  const input = 1234;
  const res = main.getSeenDigits(input);
  expect(res).toEqual([1, 2, 3, 4]);
});

test('generateNextName', () => {
  expect(main.generateName(123, 1)).toEqual(123);
  expect(main.generateName(123, 2)).toEqual(123*2);
  expect(main.generateName(123, 3)).toEqual(123*3);
});

test('doIHaveAllDigits true', () => {
  const allDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const set = new Set();
  allDigits.forEach((v) => set.add(v));
  expect(main.doIHaveAllDigits(set)).toBe(true);
});

test('doIHaveAllDigits false', () => {
  const allDigits = [1, 2, 3, 4, 7, 8, 9, 10];
  const set = new Set();
  allDigits.forEach((v) => set.add(v));
  expect(main.doIHaveAllDigits(set)).toBe(false);
});

test('sample', () => {
  const input = [0, 1, 2, 11, 1692];
  const output = [null, 10, 90, 110, 5076];
  const res = input.map(v => main.compute(v));
  expect(res).toEqual(output);
});

test('compute 0', () => {
  const input = 0;
  const output = null 
  const res = main.compute(input);
  expect(res).toEqual(output);
});

test('compute 1', () => {
  const input = 1;
  const output = 10 
  const res = main.compute(input);
  expect(res).toEqual(output);
});

test('compute 2', () => {
  const input = 2;
  const output = 90 
  const res = main.compute(input);
  expect(res).toEqual(output);
});

test('compute 1692', () => {
  const input = 1692;
  const output = 5076 
  const res = main.compute(input);
  expect(res).toEqual(output);
});
