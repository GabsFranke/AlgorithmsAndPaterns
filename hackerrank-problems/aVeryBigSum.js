// Calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.
// Return the sum of all array elements.

function aVeryBigSum(ar) {
  if (ar.length === 0) return ar;
  let aux = 0;
  let n = ar.toString().split(",");
  for (let i = 0; i < n.length; i++) {
    aux += parseInt(n[i]);
  }
  return aux;
}

console.log(
  aVeryBigSum([
    "1000000001",
    "1000000002",
    "1000000003",
    "1000000004",
    "1000000005",
  ])
);
