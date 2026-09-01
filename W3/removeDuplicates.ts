function removeDuplicates(numbers: number[]): number[] {
  return [...new Set(numbers)];
}

console.log(removeDuplicates([0, 9, 8, 8, 1, 9, 7, 1, 4, 5, 3, 5]));
