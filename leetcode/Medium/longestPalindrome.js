/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let output = 0;

  for (let i = 0; i < s.length; i++) {
    let sub = new Set();
    sub.add(s[i]);

    for (let j = i + 1; j < s.length; j++) {
      const char = s[j];
      if (!sub.has(char)) {
        sub.add(char);
      } else {
        break;
      }
    }

    output = Math.max(output, sub.size);
  }

  return output;
};

