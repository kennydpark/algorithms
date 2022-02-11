const sortColors = arr => {
  let left = 0;
  let right = arr.length - 1;
  let current = left;

  const swap = (x, y) => [arr[x], arr[y]] = [arr[y], arr[x]]

  while (current <= right) {
    if (arr[current] === 0) {
      swap(left, current);
      left++;
      current++;
    } else if (arr[current] === 2) {
      swap(right, current);
      right--;
    } else {
      current++;
    }
  }
}

// 'left' = 0, meaning lowest element
// 'right' = last element, which will be 2
// 'current' = current index in the loop

// declare function for swapping 2 element positions

// while 'current' is less than or equal to 'right',
//    if current element strictly equals 0,
//        call 'swap' with 'left' and 'current' to place 0 at left
//        increment 'left' by 1
//        increment 'current' by 1
//    else, if current element strictly equals 2,
//        call 'swap' with 'right' and 'current' to place 2 at right
//        decrement 'right' by 1
//    else,
//        increment 'current' by 1
