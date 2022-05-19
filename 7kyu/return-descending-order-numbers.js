//Problem
/*Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321*/

// Program
function descendingOrder(n){
  const array = Array.from(`${n}`);
  const numbers = array.map(e => Number(e));
  numbers.sort((a, b) => b - a);
  const result = numbers.reduce((a, e) => a + `${e}`)
  return Number(result);
}

//Console testing
console.log(descendingOrder(54644))
console.log(descendingOrder(879741))

//Expected output
// 65444
// 987741
