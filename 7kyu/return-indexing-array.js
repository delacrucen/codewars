//Problem
/*Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples:

number([]) // => []
number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]*/

// Program
var number=function(array){
  let index = [];
  for(let i=0; i < array.length; i++){
    index.push(i+1);
  }
  if(array != undefined || array == []){
    let line = array.map((e, i) => `${index[i]}: ${e}`);
    return line;
  } return index;
}

//Console testing
console.log(number(["test"])); 
console.log(number([])); 
console.log(number(["a", "b", "c", "a", "b", "c"])); 

//Expected output
// [ '1: test' ]
// []
// [ '1: a', '2: b', '3: c', '4: a', '5: b', '6: c' ]