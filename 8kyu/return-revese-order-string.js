// Problem
/*Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'*/

// Program
function solution(str){
  return str.split("").reverse().join("")
}

// Console testing
console.log(solution("three"));
console.log(solution("house"));

// Expected output
// "eerht"
// "esuoh"