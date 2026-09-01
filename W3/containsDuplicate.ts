function containsDuplicate(numbers: number[]): boolean {
  const numSet = new Set<number>();
  for (const num of numbers) {
    if (numSet.has(num)) {
      return true;
    }
    numSet.add(num);
  }
  return false;
}

console.log(containsDuplicate([10, 20, 30, 20]));
