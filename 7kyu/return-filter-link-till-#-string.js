// Problem
/*
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

// Program
function removeUrlAnchor(url){
  const link = [];
  if(url.includes("#")){
    for(let i=0; i< url.indexOf("#"); i++){
      link.push(url[i]);
    }
    return link.join("");  
  }
  else{
    return url;
  }
}

// Console testing
console.log(removeUrlAnchor("www.codewars.com#about"))
console.log(removeUrlAnchor("www.codewars.com/katas/?page=1#about"))


// Expected output
// www.codewars.com
// www.codewars.com/katas/?page=1
