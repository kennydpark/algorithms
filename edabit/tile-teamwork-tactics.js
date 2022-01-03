const possibleBonus = (a, b) => {
  if ((a - b < 0) && Math.abs(a - b) <= 6) {
    return true;
  } else {
    return false;
  }
}

// alt

function possibleBonus2(a, b) {
  return b - a <= 6 && b - a > 0
}
