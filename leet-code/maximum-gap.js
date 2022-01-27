// Given an integer array 'nums', return the maximum difference between two successive elements in its sorted form.
// If the array contains less than two elements, return 0.
// You must write an algorithm that runs in linear time and uses linear extra space.

const maximumGap = nums => {
  const sorted = nums.sort((a, b) => a - b);
  let gap = 0;
  for (let i = 1; i < sorted.length; i++) {
    if ((sorted[i] - sorted[i - 1]) > gap) {
      gap = sorted[i] - sorted[i - 1];
    }
  }
  return gap;
};

// 'sorted' = the 'nums' integer array sorted in ascending order
// 'gap' = initalized with 0
// loop through array, starting from the 2nd element
// if the difference of the current element and the previous one is bigger than 'gap',
//    assign the difference as value to 'gap'
// return 'gap'
