// Problem
/*Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!*/

// OG Program
function buildString(...template){
  return `I like #{template.join(',')}!`;
}

// Fixed Program
function buildString(...template){
  return `I like ${template.join(', ')}!`;
}

// Console testing
console.log(buildString("chocolate", "bread", "strawberry"));

// Expected output
// I like chocolate, bread, strawberry!