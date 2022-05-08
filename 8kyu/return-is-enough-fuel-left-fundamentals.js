// Problem
/*You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! 
You know that on average, your car runs on about 25 miles per gallon. 

There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. 

Function should return true if it is possible and false if not. The input values are always positive.*/

// Program
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump/mpg <= fuelLeft;
};
  
// Console testing
console.log(zeroFuel(60, 5, 12))
console.log(zeroFuel(120, 5, 3))

// Expected output
// true
// false