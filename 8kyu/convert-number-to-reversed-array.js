// Problem
/*Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
0 => [0] */

// // Program
  function digitize(n) {
    //code here
    return String(n).split("").reverse().map(e => Number(e));
  }

// Console testing
console.log(digitize(5465468))

// Expected output
// [8, 6, 4, 5, 6, 4, 5]