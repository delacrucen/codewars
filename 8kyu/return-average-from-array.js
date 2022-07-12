// Problem
/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

// Program
function find_average(array){
  return array.length == 0 ? 0 : (array.reduce((a, e) => a+e , 0) / array.length);
}

// Console testing
console.log(find_average([]))
console.log(find_average([3,3,3]))

// Expected output
// 0
// 3