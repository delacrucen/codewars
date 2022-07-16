// Problem
/*
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
*/

// Program
function position(letter){
  const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const myCharLowercase = letter.toLowerCase();
  const position = letters.indexOf(myCharLowercase) + 1;
  return `Position of alphabet: ${position}`;
}

// Console testing
console.log(position("b"))
console.log(position("x"))


// Expected output
// Position of alphabet: 2
// Position of alphabet: 24