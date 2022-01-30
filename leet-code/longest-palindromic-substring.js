const longestPalindrome = (s) => {
  if (s.length < 2) {
    return s;
  }

  let palindromeStart = null;
  let palindromeLength = null;

  const searchFromMiddle = (str, left, right) => {
    while (str[left] === str[right] && left >= 0 && right < str.length) {
      left -= 1;
      right += 1;
    }

    if (palindromeLength < right - left - 1) {
      palindromeStart = left + 1;
      palindromeLength = right - left - 1;
    }
  }

  for (let start = 0; start < s.length - 1; start++) {
    searchFromMiddle(s, start, start);
    searchFromMiddle(s, start, start + 1);
  }

  return s.substring(palindromeStart, palindromeStart + palindromeLength);
};
