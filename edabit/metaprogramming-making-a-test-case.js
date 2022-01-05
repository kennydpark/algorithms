const createTest = (a, b) => {
  if (typeof a === "number") {
    return `Test.assertEquals(createTest(${a}, ${b}), ${a + b})`;
  } else if (typeof a === "string") {
    return `Test.assertEquals(createTest("${a}", "${b}"), "${a + b}")`;
  } else if (typeof a[0] === "number") {
    return `Test.assertSimilar(createTest([${a}], [${b}]), [${a}, ${b}])`;
  } else {
    return `Test.assertSimilar(createTest(["${a}"], ["${b}"]), ["${a}", "${b}"])`;
  }
}

// alt

const createTest2 = (a, b) => {
  c = JSON.stringify(a)
  d = JSON.stringify(b)
  if (Array.isArray(a)) return `Test.assertSimilar(createTest(${c}, ${d}), [${JSON.stringify(...a)}, ${JSON.stringify(...b)}])`
  return `Test.assertEquals(createTest(${c}, ${d}), ${JSON.stringify(a + b)})`
}
