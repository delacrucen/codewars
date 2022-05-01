// Problem
/*Given a number n, return the number of positive odd numbers below n!

Examples (Input -> Output)
* 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
* 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])*/

// Program
function oddCount(n){
  let count = 0;  
  for (let i = 1; i < n; i++){
    if(i % 2 != 0){
      count += 1;
    }
  }
  return count;
}

// Console testing
console.log(oddCount(7));
console.log(oddCount(15));

// Expected output
//3
//7