//Problem
/*Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []*/

// Program
function solution(nums){
  return nums == null || nums == undefined ? [] : nums.sort((a, b) => a - b);
}

//Console testing
console.log(solution([5, 6, 1, 10]))
console.log(solution([]));
console.log(solution(null));
console.log(solution(undefined));

//Expected output
//[1, 5, 6, 10]
//[]
//[]
//[]
