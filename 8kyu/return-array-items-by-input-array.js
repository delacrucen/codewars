// Problem
/*
Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
*/

// Program
function take(arr, n) {
  return arr.slice(0, n);
}

// Console testing
console.log(take([10, 5, 50], 2))
console.log(take([50, 5, 805, 1, 7, 3], 4))


// Expected output
// [ 10, 5 ]
// [ 50, 5, 805, 1 ]