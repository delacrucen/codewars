// Problem
/*Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F*/

// Program
function convertString(name){
  const arrayName = name.split("");
  const spaceIndex = arrayName.indexOf(" ");
  const firstNameLetter = name[0].toUpperCase(); 
  const lastNameLetter = name.charAt(spaceIndex+1).toUpperCase(); 
  return `${firstNameLetter}.${lastNameLetter}`
}

// Console testing
console.log(convertString("leroy jenkins"));
console.log(convertString("john snow"));

// Expected output
