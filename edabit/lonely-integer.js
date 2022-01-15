const lonelyInteger = arr => {
  for (let i of arr) {
    if (!arr.includes(-i)) {
      return i;
    }
  }
}

// alt via includes method

const lonelyInteger1 = arr => {
  return arr.filter(i => !arr.includes(-i))[0]
}

// .find()

const lonelyInteger2 = arr => arr.find(i => !arr.includes(-i))
