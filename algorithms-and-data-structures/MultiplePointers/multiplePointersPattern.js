// Creating pointers or values that correspond to an index or position and move towards the beginning, middle or end based on a certain condition.

// Example:
// Write a function called sumZero which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero, or undefined if a pair does not exist.

// sumZero([-3,-2,1,0,1,2,3]) // [-3,3]
// sumZero([-2,0,1,3]) // undefined

// Unoptimized solution
// Time complexity: O(N^2)
// Space complexity: O(1)
// function sumZero(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === 0) {
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
// }


// Optimized solution
// Time complexity: O(N)
// Space complexity: O(1)
function sumZero(arr) {
    let leftPointer = 0
    let rightPointer = arr.length - 1;

    while (leftPointer < rightPointer) {
        let sum = arr[leftPointer] + arr[rightPointer]
        if (sum === 0) {
            return [arr[leftPointer], arr[rightPointer]];
        } else if (sum > 0) {
            rightPointer--
        } else {
            leftPointer++
        }
    }
}