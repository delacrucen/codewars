// Problem
/*Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese" */

// Program
function bmi(weight, height) {
  let calculation = weight / Math.pow(height, 2);
  if (calculation <= 18.5) {
    return "Underweight";
  } else if (calculation <= 25) {
    return "Normal";
  } else if (calculation <= 30) {
    return "Overweight";
  } else if (calculation > 30) {
    return "Obese";
  }
}

// Console testing
console.log(bmi(60, 1.79))

// Expected output
// "Normal"