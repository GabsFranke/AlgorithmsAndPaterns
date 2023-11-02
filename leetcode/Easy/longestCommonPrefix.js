/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length < 1) {
    return "";
  }
  if (strs.length === 1) {
    return strs[0];
  }
  
  let stack = "";
  const first = strs[0];

  for (let j = 0; j < first.length; j++) {
    const char = first[j];
    
    for (let i = 1; i < strs.length; i++) {
      if (char !== strs[i][j]) {
        return stack;
      }
    }
    
    stack += char;
  }

  return stack;
};

