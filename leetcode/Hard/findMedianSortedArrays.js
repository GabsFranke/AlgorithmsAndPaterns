/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let arr = nums1.concat(nums2).sort((a, b) => a - b);
  let midPointer = (arr.length - 1) / 2;
  let result = 0;
  if (midPointer % 2 === 0) {
    result = arr[midPointer];
  } else {
    result = (arr[Math.floor(midPointer)] + arr[Math.ceil(midPointer)]) / 2;
  }
  return result
};

