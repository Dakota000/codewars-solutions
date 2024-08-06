/*
Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications.

Notes:
    1. Array/list size is at least 3.
    2. Array/list numbers could be a mixture of positives, negatives and zeros.
    3. Repetition of numbers in the array/list could occur, So (duplications are not included when summing).
*/

//Answer

function maxTriSum(nums){
  return nums.filter((element, i) => nums.indexOf(element) === i).sort((a, b) => a-b).slice(-3).reduce((acc, c) => acc+c, 0)
}