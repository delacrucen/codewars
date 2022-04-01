//Problem
/*Write a function to split a string and convert it into an array of words.

Examples (Input -> Output):
"Robin Singh" ==> ["Robin", "Singh"]
"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/

// Program
function stringToArray(string){
  return string.split(" ");
}

//Console testing
const text = "Who doesn't like pizza";
console.log(stringToArray(text));

//Expected output
//["Who", "doesn't", "like", "pizza"]