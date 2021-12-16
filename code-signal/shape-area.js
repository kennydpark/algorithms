function solution(n) {
  if (n === 1) {
    return 1;
  }
  let area = 1;
  for (let i = 1; i < n; i++) {
    area += 4 * i;
  }
  return area
}

// alt solution

// function solution(n) {
//   return n * n + (n - 1) * (n - 1);
// }
