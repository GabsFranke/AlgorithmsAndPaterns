// Given two strings, write a function to determine if the second string is an anagram of the first.

// validAnagram('','') // true
// validAnagram('aaz','zza') // false
// validAnagram('anagram','nagaram') // true

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    let frequencyCounter = {};
    for (const char of str) {
       frequencyCounter[char] ? frequencyCounter[char] += 1 : frequencyCounter[char] = 1;
    }

    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        if (!frequencyCounter[letter]) {
            return false;
        } else {
            frequencyCounter[letter] -= 1;
        }
    }

    return true;

}