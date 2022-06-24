// Problem
/*Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"*/

// Program
function reverseWords(str) {
    return str.split(" ").map(e => e.split("").reverse().join("")).join(" ");
}

// Console testing
console.log(reverseWords("keyboard trying to be a mouse"));

// Expected output
//draobyek gniyrt ot eb a esuom