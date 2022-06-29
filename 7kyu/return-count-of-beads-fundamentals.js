// Problem
/*Two circular beads are placed between every pad beads. There are N pad beads. After looking at the arrangement below work out the number of circular beads.

# @@ # @@ # @@ # @@ # @@ #

*/

//Program
function countRedBeads(n) {
  return n < 2 ? 0 : 2 * n - 2;
}

// Console testing
console.log(countRedBeads(5));
console.log(countRedBeads(2));

// Expected output
// 8
// 2