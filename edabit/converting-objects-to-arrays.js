const toArray = obj => {
  let result = [];

  for (var key in obj) {
    result.push([key, obj[key]])
  }

  return result;
}

// using Object.entries()

const toArray2 = obj => {
  return Object.entries(obj)
}

// using Object.keys() and .map()

const toArray3 = obj => {
  return Object.keys(obj).map((key) => [key, obj[key]])
}

//

// reference: looping over objects

//  for (const [key, value] of Object.entries(obj)) {
//    console.log(`Key => ${key} | Value => ${value}`);
//   }
