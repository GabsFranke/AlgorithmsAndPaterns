class WordAnalizer {
  constructor(word) {
    this.word = word;
    this.vowels = "aeiou";
    this.validateWord(word);
  }
  validateWord(word) {
    let simbolsRegex = new RegExp(`[,.:;?¿!¡'"]`, "gi");
    let spacesRegex = new RegExp(`[ ]`, "gi");
    let numberRegex = new RegExp(`[0-9]`, "gi");
    if (word.match(simbolsRegex)) {
      throw "A word cannot contain puntuaction marks.";
    } else if (word.match(spacesRegex)) {
      throw "Too many words.";
    } else if (word.match(numberRegex)) {
      throw "A word cannot contain numbers.";
    } else if (word.length === 0) {
      throw "A word is required";
    }
  }
  countVowels() {
    let vowelRegex = new RegExp(`[${this.vowels}]`, "gi"); // List of vowels (Global and Insensitive)
    return this.word.match(vowelRegex).length;
  }
  countConsonants() {
    let consonantRegex = new RegExp(`(?![${this.vowels}])[a-z]`, "gi");
    return this.word.match(consonantRegex).length;
  }
  countCharacters() {
    return this.countVowels() + this.countConsonants();
  }
}

const test = new WordAnalizer("Magui");

// console.log(test.countConsonants());
