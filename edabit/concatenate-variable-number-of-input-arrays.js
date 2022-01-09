const concat = (...args) => {
  return args.flat()
}

// using .concat()

const concat1 = (...args) => {
  return [].concat(...args)
}
