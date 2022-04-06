//Problem
/*Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
Return your answer as a number.*/

// Program
function sumMix(x){
  return x.map(e => Number(e)).reduce((a, e) => a + e);
}

//Console testing
console.log(sumMix([3, "2", 6, "4", 5]));

//Expected output
//20