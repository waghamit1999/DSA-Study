function findMaximum(arr: number[]): number {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    max = arr[i] > max ? arr[i] : max;
  }
  return max;
}

console.log(findMaximum([9, 23, 6, 12, 89, 2, 6, 8, 234, 76]));
console.log(findMaximum([12, 5, 27, 8, 19]));
