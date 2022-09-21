// This pattern involves creating a window which can either be an array or number from one position to another.
// Depending on certain condition, the window either increases or closes (and a new window is created).
// (very useful for keeping track of a subset of data in an array/string etc.)

// Example:
// Write a function called maxSubarraySum which accepts an array of integers and a number called n.
// The function should calculate the maximum sum of n consecutive elements in the array.

// Unoptimized solution
// Time complexity: O(N^2)
// function maxSubarraySum(arr, n) {
//   if (n > arr.length) return null;
//   let max = -Infinity;
//   for (let i = 0; i < arr.length - num + 1; i++) {
//     let temp = 0;
//     for (let j = 0; j < num; j++) {
//       temp += arr[i + j];
//     }
//     if (temp > max) max = temp;
//   }
//   return max;
// }

// Optimized solution
// Time complexity: O(N)
function maxSubarraySum(arr, n) {
  if (n > arr.length) return null;
  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}
