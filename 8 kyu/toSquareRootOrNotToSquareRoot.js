/*
Write a method, that will get an integer array as parameter and will process every number from this array.

Task: Return a new array with processing every number of the input-array like this:
    If the number has an integer square root, take this, otherwise square the number.

Example:
    [4,3,9,7,2,1] -> [2,9,3,49,4,1]

Notes:
    The input array will always contain only positive numbers, and will never be empty or null.
*/

//Answer

function squareOrSquareRoot(arr){
  return arr.map(num => {
    const sqrtNum = Math.sqrt(num)
    if(sqrtNum % 1 === 0){
      return sqrtNum
    }else{
      return num*num
    }
  })
}