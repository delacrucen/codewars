//Problem
/*Replace every word of a string with the word "thing"
Empty strings will return ""*/

// Program
function toFreud(string) {
  return string.length === 0 ? "" : string.split(" ").map(e => "thing").join(" ");
}

//Console testing
console.log(toFreud("This is a test"))
console.log(toFreud(""))

//Expected output
// thing thing thing thing
// ""
