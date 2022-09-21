// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has it's corresponding value squared in the second array.
// The frequency of values mus be the same.

// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,3], [4,4,1]) // false

// Example: not optimized O(n^2)
// (has nested loops (indexOf will iterate))
//
// function same(arr1, arr2) {
//     if (arr1.length !== arr2.length) return false;
//     for (let i = 0; i < arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[i] ** 2);
//         if (correctIndex === -1) return false;
//         arr2.splice(correctIndex, 1);
//     }
//     return true;
// }
//

// Optimized version: O(n)
// (build objects and compare them)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (const val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (const val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (const key in frequencyCounter1) {
    // check if the value ** 2 isn't in the frequencycounter
    if (!(key ** 2 in frequencyCounter2)) return false;
    // check if the amuont of times it occurs isn't matching
    if (frecuencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }

  return true;
}
