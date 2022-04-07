//Problem
/*Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.*/

// Program
function even_or_odd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

//Console testing
console.log(even_or_odd(4));
console.log(even_or_odd(5));

//Expected output
//"Even"
//"Odd"