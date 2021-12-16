function solution(inputArray) {
  let largest = inputArray[0] * inputArray[1];
  for (let i = 0; i < inputArray.length; i++) {
    if ((inputArray[i] * inputArray[i + 1]) > largest) {
      largest = (inputArray[i] * inputArray[i + 1])
    }
  }
  return largest;
}

// alt solution

// function solution(inputArray) {
//   let largest = inputArray[0] * inputArray[1];

//   for (let i = 1; i < inputArray.length - 1; i++) {
//     largest = Math.max(prod, inputArray[i] * inputArray[i + 1]);
//   }

//   return largest
// }
