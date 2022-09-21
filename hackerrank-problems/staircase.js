// Print a staircase of size 'n' using # symbols and spaces.

function staircase(n) {
  let staircase = "";
  for (let i = 0; i < n; i++) {
    staircase += " ".repeat(n - i - 1) + "#".repeat(i + 1) + "\n";
  }
  console.log(staircase);
}