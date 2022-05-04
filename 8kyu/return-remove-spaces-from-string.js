// Problem
/*Simple, remove the spaces from the string, then return the resultant string.*/

// Program
function noSpace(x){
  return x.split(" ").join("");
}

// Console testing
console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));

// Expected output
// "8j8mBliB8gimjB8B8jlB"