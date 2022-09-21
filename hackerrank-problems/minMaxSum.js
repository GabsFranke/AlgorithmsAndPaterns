// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
// Return: print the respective minimum and maximum values as a single line of two space - separated long integers.

function miniMaxSum(arr) {
  let sortedMin = arr.sort((a, b) => a - b);
  let min = 0;
  let max = 0;
  for (let i = 0; i < sortedMin.length - 1; i++) {
    min += sortedMin[i];
  }
  let sortedMax = arr.sort((a, b) => b - a);
  for (let i = 0; i < sortedMax.length - 1; i++) {
    max += sortedMax[i];
  }
  console.log(min, max);
}