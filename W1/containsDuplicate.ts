function containsDuplicate(numbers: number[]): boolean {
  const seen = new Set<number>();
  for (const num of numbers) {
    console.log(num);

    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}
console.log(containsDuplicate([5, 8, 2, 9, 8]));
