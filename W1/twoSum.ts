/**
 * numbers = [3, 2, 4]
 * target = 6
 * Expecetd o/p is [1, 2]
 */

function twoSum(numbers: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < numbers.length; i++) {
    const req = target - numbers[i];
    if (map.has(req)) {
      return [map.get(req)!, i];
    }
    map.set(numbers[i], i);
  }
  return [];
}
console.log(twoSum([12, 34, 56, 12, 1, 3, 4, 5, 6, 7, 8, 9], 42));
