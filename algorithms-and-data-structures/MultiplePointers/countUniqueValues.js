// Given a sorted array, count the unique values.
// Return the count of unique values.

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let leftPointer = 0;
  for (let nextPointer = 1; nextPointer < arr.length; nextPointer++) {
    if (arr[leftPointer] !== arr[nextPointer]) {
      leftPointer++;
      arr[leftPointer] = arr[nextPointer];
    }
  }
  return leftPointer + 1;
}
