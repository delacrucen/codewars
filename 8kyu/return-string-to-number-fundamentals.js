// Problem
/*We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7*/

// Program
const stringToNumber = function(str){
  // put your code here
  return Number(str);
}

// Console testing
console.log(stringToNumber("123412"));
console.log(stringToNumber("46436"));
console.log(stringToNumber("6456"));

// Expected output
// 123412
// 46436
// 6456