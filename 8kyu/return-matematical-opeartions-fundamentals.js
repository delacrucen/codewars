// Problem
/*Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

Please use the following function names:

addition = add

multiply = multiply

division = divide (both integer and float divisions are accepted)

modulus = mod

exponential = exponent

subtraction = subt

Note: All math operations will be: a (operation) b*/

// Program
function add(a,b){
  return a + b;
}

function divide(a,b){
  return a / b;
}

function multiply(a,b){
  return a * b;
}

function mod(a,b){
  return a % b;
}
 
function exponent(a,b){
  return a ** b;
}
  
function subt(a,b){
  return a - b;
}

// Console testing
console.log(add(1,2));
console.log(multiply(1,2));
console.log(divide(2,1));
console.log(mod(1,2));
console.log(exponent(1,2));
console.log(subt(1,2));

// Expected output
//3
//2
//2
//1
//1
//-1