// Problem
/*This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.*/

// Program
function simpleMultiplication(number) {
  return number % 2 == 0 ? number * 8 : number * 9;
}

// Console testing
console.log(simpleMultiplication(5));
console.log(simpleMultiplication(4));

// Expected output
// 45
// 32
