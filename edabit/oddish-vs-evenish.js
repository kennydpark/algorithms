const oddishOrEvenish = num => {
  let numString = String(num);
  let sum = 0;

  for (let i = 0; i < numString.length; i++) {
    sum += Number(numString[i]);
  }

  if (sum % 2 === 0) {
    return 'Evenish';
  } else {
    return 'Oddish'
  }
}

// alt

const oddishOrEvenish1 = num => {
  let sum = num.toString().split('').map(Number).reduce((a, b) => {
    return a + b
  }, 0 )

  if (sum % 2 === 0) {
    return 'Evenish'
  } else {
    return 'Oddish'
  }
}
