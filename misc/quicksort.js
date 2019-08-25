/**
 * @param {number[]} a
 * @returns {number[]}
 */
const quicksort = a => {
  if (a.length === 0) return [];
  let [h, ...t] = a;
  return [
    ...quicksort(t.filter(e => e < h)),
    h,
    ...quicksort(t.filter(e => e > h))
  ];
};

const a = [2, 1, 3, 9, 4, 453, 3, 123, 8, 7];
console.log("initial: ", a);
console.log("sorted: ", quicksort(a));
