// Problem
/*There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!*/

// Program
function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    const classAvg = classPoints.reduce( (ac, el) => ac + el, 0) / classPoints.length;
    return yourPoints > classAvg ? true : false;
}


// Console testing
console.log(betterThanAverage([2, 5, 3, 2, 1, 4], 5));

// Expected output
// true
