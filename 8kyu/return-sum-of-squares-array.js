//Problem
/*Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.*/

// Program
function squareSum(numbers){
  return numbers.reduce((a, e) => a += (e * e), 0)
}

//Console testing
console.log(squareSum([2,2]));

//Expected output
//8