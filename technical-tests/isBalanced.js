// {{[()]}} -> true
// {}[]() -> true
// {[(}]) -> false
// }{)( -> false

function isBalanced(str) {
  let stack = [];
  let openBrackets = ["{", "[", "("];
  let closeBrackets = ["}", "]", ")"];
  for (let i = 0; i < str.length; i++) {
    if (openBrackets.includes(str[i])) {
      stack.push(str[i]);
    } else if (closeBrackets.includes(str[i])) {
      let lastOpenBracket = stack.pop();
      if (
        openBrackets.indexOf(lastOpenBracket) !== closeBrackets.indexOf(str[i])
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(isBalanced("{{[()]}}"));
console.log(isBalanced("{[(}])"));
console.log(isBalanced("}{)("));
console.log(isBalanced("{[])(}"));
