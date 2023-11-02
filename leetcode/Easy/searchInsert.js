/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let middle = Math.floor((start + end) / 2);
  for (
    middle;
    nums[middle] !== target && start <= end;
    middle = Math.floor((start + end) / 2)
  ) {
    if (target < nums[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  if (nums[middle] < target) return middle + 1;
  if (nums[middle] > target) return middle - 1;
  return middle < 0 ? 0 : middle;
};

