// Count how many candles are tallest.

function birthdayCakeCandles(candles) {
  let sorted = candles.sort((a, b) => b - a);
  let count = 0;
  for (let i = 0; i < candles.length; i++) {
    let n = candles[i];
    if (n === candles[0]) {
      count++;
    }
  }
  return count;
}