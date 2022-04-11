// Problem
/*If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.*/

// Program
function countSheeps(num){
  let sheeps = "";
  for (let i=1; i <= num; i++) { 
    sheeps += `${i} sheep...`; 
  }
  return sheeps;
}

// Console testing
console.log(countSheeps(10));

// Expected output
// "1 sheep...2 sheep...3 sheep...4 sheep...5 sheep...6 sheep...7 sheep...8 sheep...9 sheep...10 sheep..."
