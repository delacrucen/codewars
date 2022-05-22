// Problem
/*Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"*/

// Program
function repeatStr (n, s) {
  return s.repeat(n)
}

// Console testing
console.log(repeatStr(5, "test"));

// Expected output
// testtesttesttesttest