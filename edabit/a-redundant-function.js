const redundant = str => {
  return () => {
    return str
  }
}

// alternative

const redundant2 = str => () => str;
