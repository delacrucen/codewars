// Problem
/*Grade book
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'

Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.*/

// Program
function getGrade (s1, s2, s3) {
  let score = (s1 + s2 + s3) / 3;
  console.log(score);
  if(score <= 100 && score >= 90){
    return "A";
  } else if(score <= 90 && score >= 80){
    return "B";
  } else if(score <= 80 && score >= 70){
    return "C";
  } else if(score <= 70 && score >= 60){
    return "D";
  } else if(score <= 60 && score >= 0){
    return "F";
  }
}

// Console testing
console.log(getGrade(95,90,93));
console.log(getGrade(70,70,100));
console.log(getGrade(60,82,76));
console.log(getGrade(65,70,59));

// Expected output
// 43
// 175
// 107