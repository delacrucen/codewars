// Problem
/*
Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?
*/

// OG program
function greet(name){
  return "Hello, " + name + "!";
  if(name === "Johnny")
    return "Hello, my love!";
}

// Fixed program
function greet(name){
  if(name === "Johnny")
    return "Hello, my love!";
  else{
    return "Hello, " + name + "!";
  }
}

// Console testing
console.log(sumArray([10, 5, 6, 7, 8, 1, 5]))
console.log(sumArray([ -6, -20, -1, -10, -12 ]))
console.log(sumArray([ 0, 1, 6, 10, 10 ]))
console.log(sumArray([]))
console.log(sumArray([1]))


// Expected output
// 31
// -28
// 17
// 0
// 0