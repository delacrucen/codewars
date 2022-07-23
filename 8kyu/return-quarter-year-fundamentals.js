// Problem
/*
I've hit a few bugs in my Java/Type/Coffee-script code recently, and I've traced the problem back to the global isNaN function I was using. I had expected it to be more discerning, but it's returning true for undefined right now.

Write a function isReallyNaN that returns true only if passed in an argument that evalutes to NaN, and returns false otherwise.

Any solution is acceptable!
*/

// Program
const quarterOf = (month) => {
  const q1 = [1, 2, 3, 1]
  const q2 = [4, 5, 6, 2]
  const q3 = [7, 8, 9, 3]
  const q4 = [10, 11, 12, 4]
  if (q1.includes(month)) return q1[3]
  if (q2.includes(month)) return q2[3]
  if (q3.includes(month)) return q3[3]
  if (q4.includes(month)) return q4[3]
}

// Console testing
console.log(quarterOf(9))
console.log(quarterOf(2))
console.log(quarterOf(5))

// Expected output
// 3
// 1
// 2