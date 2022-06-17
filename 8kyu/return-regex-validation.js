// Problem
/*Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).*/

// Program
function validateUsr(username) {
  const testThis = /^[a-z0-9_]{4,16}$/;
  return testThis.test(username);
}

// Console testing
console.log(validateUsr("unicornSaurus"));
console.log(validateUsr("three_3"));

// Expected output
// false
// true
