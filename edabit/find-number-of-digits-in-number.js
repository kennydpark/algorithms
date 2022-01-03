const num_of_digits = (num) => {
  if (num < 0) {
    num = num * -1;
  }

  return num.toString().length;
}

// alt

// using .log10()

const num_of_digits2 = n => n ? ~~Math.log10(Math.abs(n)) + 1 : 1;
