const generation = (x, y) => {
  const table = {
    '-3': ['great grandfather', 'great grandmother'],
    '-2': ['grandfather', 'grandmother'],
    '-1': ['father, mother'],
    0: ['me!', 'me!'],
    1: ['son', 'daughter'],
    2: ['grandson', 'granddaughter'],
    3: ['great grandson', 'great granddaughter']
  }
  let gender;

  if (y === 'm') {
    gender = 0;
  } else {
    gender = 1;
  }
  return table[x][gender]
}

// 'table' = object for generation table
// 'gender' = index for male or female in value arrays
// if 'y' === 'm',
//      gender = 0
//      else
//      gender = 1
// return table at key x, index 'gender'
