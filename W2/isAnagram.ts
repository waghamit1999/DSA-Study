function isAnagram(first: string, second: string) {
  if (first.length !== second.length) return false;

  const frq = new Map<string, number>();
  for (const char of first) {
    frq.set(char, (frq.get(char) ?? 0) + 1);
  }

  for (const char of second) {
    if (!frq.has(char)) return false;

    const count = frq.get(char)!;
    if (count === 1) {
      frq.delete(char);
    } else {
      frq.set(char, (frq.get(char) ?? 0) - 1);
    }
  }

  return frq.size === 0;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("sangram", "gSnaram"));
console.log(isAnagram("Amit", "mAti"));
console.log(isAnagram("waghmare", "rawhmage"));
