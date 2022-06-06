// Problem
/*The code provided is supposed replace all the dots . in the specified String str with dashes -

But it's not working properly.

Task
Fix the bug so we can all go home early.

Notes
String str will never be null.*/

// Program
function replaceDots(str) {
  return str.replace(/\./g, '-');
}

// Console testing
console.log(replaceDots("one.two.three"));

// Expected output
// "one-two-three"