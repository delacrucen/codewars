// Problem
/*Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false*/

// Program
function solution(str, ending){
  let size = -ending.length;
  return str.slice(size) === ending ? true : false;;
}

// Console testing
console.log(solution('abc', 'bc'))
console.log(solution('abcde', 'cde'))
console.log(solution('abcde', 'abc'))

// Expected output
// true
// true
// false