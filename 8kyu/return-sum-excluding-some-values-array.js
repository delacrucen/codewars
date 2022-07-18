// Problem
/*
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
*/

function sumArray(array){
  if(array != undefined || array != null){
    const arraySorted = array.sort((a,b) => a-b);
    const minValue = arraySorted.shift();
    const maxValue = arraySorted.pop();
    return arraySorted.reduce((a,e) => a+e, 0); 
  }else{
    return 0;
  }
}

// Console testing
console.log(sumArray([10, 5, 6, 7, 8, 1, 5]))
console.log(sumArray([ -6, -20, -1, -10, -12 ]))
console.log(sumArray([ 0, 1, 6, 10, 10 ]))
console.log(sumArray([]))
console.log(sumArray([1]))


// Expected output
// 31
// -28
// 17
// 0
// 0