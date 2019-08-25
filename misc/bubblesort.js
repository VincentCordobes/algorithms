const a = [2, 1, 3, 9, 4, 453, 3, 123, 8, 7];

// switch a[i] with a[j] in place
const swap = (a, i, j) => {
  let temp = a[i];
  a[i] = a[j];
  a[j] = temp;
};

const bubblesort = a => {
  const res = [...a];
  let changed = true;
  while (changed) {
    changed = false;
    for (let i = 0; i < res.length - 1; i++) {
      if (res[i] > res[i + 1]) {
        swap(res, i, i + 1);
        changed = true;
      }
    }
  }
  return res;
};

console.log("initial", a);
console.log("sorted", bubblesort(a));
