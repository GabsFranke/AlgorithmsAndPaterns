/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const dx = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (dx[char]) {
      arr.push(char);
    } else {
      if (arr.length === 0 || dx[arr.pop()] !== char) {
        return false;
      }
    }
  }

  return arr.length === 0;
};

