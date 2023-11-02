/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let arr = x.toString().split("");
  let inverted = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    const e = arr[i];
    inverted.push(e);
  }
  return arr.join("") === inverted.join("");
};
