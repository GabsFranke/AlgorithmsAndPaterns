function compressedString(message) {
  // Write your code here
  let aux = "";
  let contador = 1;
  for (let i = 0; i < message.length; i++) {
    if (message[i] === message[i + 1]) {
      contador++;
    } else {
      aux += message[i] + (contador > 1 ? contador : "");
      contador = 1;
    }
  }
  return aux;
}

// console.log(compressedString("aabcccccaaa"));
