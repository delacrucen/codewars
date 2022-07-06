// Problem
/*
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

// Fixed Program
function filterStrings(array){
  return array.filter(e => typeof e == "number")
}

// Console testing
console.log(filterStrings(["test", 1, "2", 5, 7, 12341]))
console.log(filterStrings([1,2,'aasf','1','123',123]))

// Expected output
// [ 1, 5, 7, 12341 ]
// [ 1, 2, 123 ]