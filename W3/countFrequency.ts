function countFrequency(numbers: number[]): Map<number, number> {
  const frequencies = new Map<number, number>();
  for (const num of numbers) {
    frequencies.set(num, (frequencies.get(num) ?? 0) + 1);
  }
  return frequencies;
}

console.log(countFrequency([1, 2, 2, 3, 1, 3, 3, 2, 3, 3, 3, 9, 1, 2]));
console.log(countFrequency([5, 5, 2, 8, 2, 5]));
