// Problem
/*Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
Notes
The input array will always contain only positive numbers, and will never be empty or null.*/

// Program
function squareOrSquareRoot(array) {
  return array.map(e => {
    const sqrt = Math.sqrt(e);
    return (sqrt % 1 == 0) ? sqrt : Math.pow(e, 2);
  });
}

// Console testing
console.log(squareOrSquareRoot([4,3,9,7,2,1]));

// Expected output
// [ 2, 9, 3, 49, 4, 1 ]