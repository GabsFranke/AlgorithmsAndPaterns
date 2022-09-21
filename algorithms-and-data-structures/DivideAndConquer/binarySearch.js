// Write a function called search that accepts a sorted array of integers and a value.
// Returns the index where the value passed to the function is located.
// If value is not found, return -1

// search([1,2,3,4,5,6], 4) // 3
// search([1,2,3,4,5,6], 6) // 5
// search([1,2,3,4,5,6], 11) // -1

// Unoptimized solution: Linear search
// Time complexity: O(N)
// function search(arr, n) {
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] === n) return i;
//     }
//     return -1;
// }

// Optimized solution: Binary search
// Time complexity: Log(N)

function search(arr, n) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    // currentElement = arr[middle]
    if (array[middle] < n) {
      min = middle + 1;
    } else if (array[middle] > n) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}
