function isPalindrome(str: string) {
  const fisrt = 0;
  const last = str.length - 1;

  if (str[fisrt].toLocaleLowerCase() !== str[last].toLocaleLowerCase()) {
    return false;
  }
  return true;
}

console.log(isPalindrome("Nayan"));
