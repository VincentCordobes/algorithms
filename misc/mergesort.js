console.log('Merge sort');
console.log('===========');

const a = [2, 1, 3, 9, 4, 453, 3, 123, 8, 7];

// merge Sort
const mergeSort = (a) => (
  a.length == 1
  ? a
  : merge(mergeSort(a.slice(0, a.length/2)),
          mergeSort(a.slice(a.length/2, a.length)))
)

const merge = (a, b) => {
  if (a.length === 0)
    return b;
  if (b.length === 0)
    return a;
  if (a[0] < b[0])
    return [a[0], ...merge(a.slice(1, a.length), b)];
  return [b[0], ...merge(b.slice(1, b.length), a)];
}


console.log('initial', a);
console.log('after', mergeSort(a));
