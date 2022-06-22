// Problem
/*Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]*/

// Program
const reverseSeq = n => {
  let arr = [];
  for (let i=n; i>0; i--){
    arr.push(i)
  }
  return arr; 
};

// Console testing
console.log(reverseSeq(10));

// Expected output
// 10, 9, 8, 7, 6, 5, 4, 3, 2, 1