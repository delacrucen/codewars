//Problem
/*Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false*/

// Program
function solution(string){
  let os = 0;
  let xs = 0;
  let lowerCase = string.toLowerCase();
  // count os and xs
  lowerCase.split("").forEach(e => {
    if(e === "o"){
      os++
    }
    if(e === "x"){
      xs++
    }
  });
  // evaluate problem to return value
  if(os === xs){
    return true;
  }
  if (os !== xs){
    return false;
  }
  if(os === 0 && xs === 0){
    return false;
  }
  console.log(os)
  console.log(xs)
}

//Console testing
console.log(solution("ooxXxxxxxm"))
console.log(solution("ooxxm"))
console.log(solution("aasdsam"))

//Expected output
// false
// true
// true
