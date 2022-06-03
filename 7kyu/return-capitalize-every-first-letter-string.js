// Problem
/*Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:
Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"*/

// Program
function capitalized(str){
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');
}

// Console testing
console.log(capitalized("keyboard trying to be a mouse"));
console.log(capitalized("a car going by"));

// Expected output
// "Keyboard Trying To Be A Mouse"
// "A Car Going By"
