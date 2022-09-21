function flattenArray(arr) {
  let aux = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      aux = aux.concat(flattenArray(arr[i]));
    } else {
      aux.push(arr[i]);
    }
  }
  return aux;
}

// console.log(flattenArray([1, [2, [3, [4, 5, [1, [2], 3, 4, 5]]], 6], 7]));









