// Problem
/*Complete the solution so that it reverses all of the words within the string passed in.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"*/

//Program
function reverseWords(str){
  return str.split(" ").reverse().join(" ");
}

// Console testing
console.log(reverseWords("Tokyo has the largest population of Japan"));
console.log(reverseWords("The greatest victory is that which requires no battle"));

// Expected output
// Japan of population largest the has Tokyo
// battle no requires which that is victory greatest The