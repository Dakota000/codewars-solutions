/*
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

//Answer

function findLongest(array) {
  let lengths = array.map(number => number.toString().length);
  let maxLength = Math.max(...lengths);
  let index = lengths.indexOf(maxLength);

  return array[index];
}