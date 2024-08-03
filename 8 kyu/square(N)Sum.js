/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 12+22+22=91^2 + 2^2 + 2^2 = 912+22+22=9.
*/

//Answer

function squareSum(numbers){
  let result = 0
  for (var i = 0; i < numbers.length; i++) {
    result += (numbers[i] * numbers[i]);
  }
  return result;
  }