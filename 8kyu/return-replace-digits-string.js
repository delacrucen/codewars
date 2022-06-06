// Problem
/*Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string*/

// Program
function fakeBin(x) {
  return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

// Console testing
console.log(fakeBin("45454561651"));
console.log(fakeBin("123156"));
console.log(fakeBin("87984891"));

// Expected output
//01010110110
//000011
//11110110