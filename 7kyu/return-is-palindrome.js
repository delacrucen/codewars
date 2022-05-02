// Problem
/*Write a function that checks if a given string (case insensitive) is a palindrome.*/

// Program
function isPalindrome(x) {
  const lower = x.toLowerCase();
  return lower === lower.split("").reverse().join("") ? true : false;
}

// Console testing
console.log(isPalindrome("aba"));
console.log(isPalindrome("hey"));
console.log(isPalindrome("oko"));

// Expected output
// true
// false
// true