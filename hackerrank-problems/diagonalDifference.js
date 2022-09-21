// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// Return: int: the absolute diagonal difference.

function diagonalDifference(arr) {
  // Write your code here
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][arr.length - 1 - i];
  }
  return Math.abs(sum1 - sum2);
}
