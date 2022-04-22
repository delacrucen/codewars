// Problem
/*Complete the function which converts binary number given as string to a integer number.*/

// Program
function toBinary(string){
  let acum = 0;
  const binary = [128, 64, 32, 16, 8, 4, 2, 1].reverse();
  const stringToNumbers = string.split("").map(e => Number(e)).reverse();
  for (let i = 0; i <= binary.length - 1; i++){
    if(stringToNumbers[i] === 1){
      acum += binary[i]
    } else {
      acum += 0;
    }
  }
  return acum;
}

// Console testing
console.log(toBinary("101011"));
console.log(toBinary("10101111"));
console.log(toBinary("1101011"));

// Expected output
// 43
// 175
// 107