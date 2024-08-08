/*
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
*/

//Answer

function cubeOdd(arr){
  if(!arr.every(item => typeof item === 'number')){
    return undefined
  }
  
  return arr.filter(num => num%2!==0).reduce((acc, c) => acc+(c**3), 0)
}