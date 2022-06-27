// Problem
/*Complete the function which converts hex number (given as a string) to a decimal number.*/

// Program
function hexToDec(hexString){
  return parseInt(hexString, 16)
}

// Console testing
console.log(hexToDec("10"))
console.log(hexToDec("BB"))

// Expected output
//16
//187