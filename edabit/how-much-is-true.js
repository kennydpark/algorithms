const countTrue = (array) => {
  if (!array) {
    return 0;
  }
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === true) {
      count++;
    }
  }

  return count;
}

// using .filter() method

const countTrue2 = array => {
  return array.filter(Boolean).length
}

const countTrue3 = array => {
  return array.filter(x => x === true).length
}
