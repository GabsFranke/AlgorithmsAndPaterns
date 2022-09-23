function collectOdds(arr) {
  let result = [];

  function helper(input) {
    if (input.length === 0) return;

    // if its not divisible by 2 then it's odd
    if (input[0] % 2 !== 0) {
      result.push(input[0]);
    }

    helper(input.slice(1));
  }

  helper(arr);

  return result;
}
