//Problem
/*Given an array of integers, return a new array with each value doubled.
For example:
[1, 2, 3] --> [2, 4, 6]*/

// Program
function maps(x){
  return x.map(x => x * 2);
}

//Console testing
const numbers = [3, 2, 6, 4, 5];
console.log(maps(numbers));

//Expected output
//[6, 4, 12, 8, 10]