//Problem
/*Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer*/

// Program
function squareDigits(num){
  return Number(Array.from(String(num)).map(e => Number(e) * Number(e)).join(""));
}
//Console testing
console.log(squareDigits(5421231));
console.log(squareDigits(432847));

//Expected output
//251641491
//1694641649
