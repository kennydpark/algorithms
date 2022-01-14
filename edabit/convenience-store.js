const changeEnough = (change, amountDue) => {
  let quarters = change[0] *= 0.25;
  let dimes = change[1] *= 0.1;
  let nickles = change[2] *= 0.05;
  let pennies = change[3] *= 0.01;

  let total = quarters + dimes + nickles + pennies

  if (total >= amountDue) {
    return true;
  } else {
    return false;
  }
}

// destructuring

const changeEnough1 = (change, amountDue) => {
  let [quarters, dimes, nickles, pennies] = change;

  let total = (quarters * 0.25) + (dimes * 0.1) + (nickles * 0.05) + (pennies * 0.01)

  if (total >= amountDue) {
    return true;
  } else {
    return false;
  }
}

// alt

const changeEnough2 = (change, amountDue) => {
  let sum = change[0] * 0.25 + change[1] * 0.1 + change[2] * 0.05 + change[3] * 0.01;
  return sum >= amountDue;
}

// .reduce method

const sum = arr => arr.reduce((total, num) => total + num, 0);

const values = [0.25, 0.1, 0.05, 0.01];

const changeEnough3 = (change, amountDue) =>
  sum(change.map((amount, i) => amount * values[i])) >= amountDue;
