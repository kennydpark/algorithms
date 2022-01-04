const sevenBoom = arr => {
  let newArray = arr.join('').split('')
  if (newArray.includes('7')) {
    return 'Boom!'
  } else {
    return 'there is no 7 in the array'
  }
}

// alt

const sevenBoom2 = arr =>
  /7/.test(arr) ? 'Boom!' : 'there is no 7 in the array';

// .indexOf()
const sevenBoom3 = (arr) => arr.join("").indexOf('7') >= 0 ? "Boom!" : "there is no 7 in the array";

// tertiary condition
const sevenBoom4 = function (arr) {
  return (arr.join().includes('7') ? "Boom!" : "there is no 7 in the array");
}
