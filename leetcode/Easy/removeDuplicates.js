/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let k = nums.length;
  let idx = [];
  for (let i = 1; i < nums.length; i++) {
    let prev = nums[i - 1];
    let cur = nums[i];
    if (prev === cur) {
      idx.push(i);
      k--;
    }
  }
  for (let i = 0; i < idx.length; i++) {
    delete nums[idx[i]];
  }
  nums.sort((a, b) => a - b);
  return k;
};

