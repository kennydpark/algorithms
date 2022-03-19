const rotate = matrix => {
  matrix.reverse()

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }

  return matrix
};

const test = rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
console.log(test)
