// Problem
/*Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john"*/

// Program
function nameShuffler(str){
  return str.split(" ").reverse().join(" ")
}

// Console testing
console.log(nameShuffler("John Doe"));

// Expected output
// "Doe John"