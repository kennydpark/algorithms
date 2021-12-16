function solution(statues) {
  if (statues.length === 1) {
    return 0;
  }
  let count = 0;
  statues.sort(function (a, b) { return a - b });
  for (let i = 1; i < statues.length; i++) {
    if ((statues[i] - statues[i - 1]) !== 1) {
      count += statues[i] - statues[i - 1] - 1
    }
  }
  return count;
}

// alt solution

// function solution(sequence) {
//   return Math.max(...sequence) - Math.min(...sequence) + 1 - sequence.length
// }
