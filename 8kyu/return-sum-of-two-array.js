//Problem
/*I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.*/

// Program
function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce( (a, e) => a + e);
}
//Console testing
console.log(arrayPlusArray([4, 5, 5, 5], [5, 3, 3, 5]));

//Expected output
//35  