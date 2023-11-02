/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let dx = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let arr = s.split("");
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (dx[arr[i]] >= dx[arr[i + 1]]) {
      result += dx[arr[i]];
    } else if (i === arr.length - 1) {
      result += dx[arr[i]];
    } else {
      result += dx[arr[i + 1]] - dx[arr[i]];
      i++;
    }
  }
  return result;
};