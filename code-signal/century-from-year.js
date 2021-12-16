function solution(year) {
  let float = year / 100;
  let century = parseInt(float)
  if (float > century) {
    return century + 1;
  }
  return century;
}

// alt solution

// function solution(year) {
//   return Math.ceil(year / 100)
// }
