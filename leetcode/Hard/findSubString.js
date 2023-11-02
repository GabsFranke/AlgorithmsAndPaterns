/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const subLength = words.length * words[0].length;
  const wLength = words[0].length;
  let output = [];
  let dx = {};

  for (let i = 0; i < words.length; i++) {
    if (dx[words[i]]) {
      dx[words[i]] = dx[words[i]] + 1;
    } else {
      dx[words[i]] = 1;
    }
  }

  for (let i = 0; i <= s.length - subLength; i++) {
    let map = {};

    for (let j = i; j < i + subLength; j += wLength) {
      const word = s.slice(j, j + wLength);
      map[word] = (map[word] || 0) + 1;
    }

    if (isConcatenated(map, dx)) {
      output.push(i);
    }
  }

  return output;
};

function isConcatenated(map, dx) {
  for (const word in dx) {
    if (dx[word] !== map[word]) {
      return false;
    }
  }
  return true;
}

