// Problem
/*
Implement String#digit?, which should return true if given object is a digit (0-9), false otherwise.
*/

// Program
String.prototype.digit = function (){
  return /\d/g.test(this);
}

// Console testing
console.log("a".digit());
console.log("55".digit());
console.log("1".digit());

// Expected output
// false
// true
// true