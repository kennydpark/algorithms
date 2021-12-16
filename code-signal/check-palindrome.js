function solution(inputString) {
  const first = inputString;
  let second = '';
  for (let i = inputString.length - 1; i >= 0; i--) {
    second += inputString[i];
  }
  if (first === second) {
    return true;
  } else {
    return false
  }
}

// alt solution

// function solution(inputString) {
//   return inputString == inputString.split('').reverse().join('');
// }
