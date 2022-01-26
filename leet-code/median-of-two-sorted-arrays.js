// Given two sorted arrays of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

const findMedianSortedArrays = (nums1, nums2) => {
  const sorted = nums1.concat(nums2).sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }

  return sorted[middle];
};

// 'sorted' = combine the two arrays, sort them in ascending numerical order
// 'middle' = find the middle index of the array length by dividing the length in half and getting the base integer
// if the length of the array is even,
//    return the average of the 2 middle elements
// else, return the array at the 'middle' index
