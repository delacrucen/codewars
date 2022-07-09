// Problem
/*
Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.
*/

// Program
function nearestSq(n){
  return Math.pow(Math.round(Math.sqrt(n)), 2);
}

// Console testing
console.log(nearestSq(112))
console.log(nearestSq(9999))


// Expected output
// 121
// 10000