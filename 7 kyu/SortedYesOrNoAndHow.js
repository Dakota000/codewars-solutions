/*
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/

//Answer

function isSortedAndHow(arr){
  let ascendingArr = [...arr].sort((a, b) => a - b);
  let descendingArr = [...arr].sort((a, b) => b - a);
  
  if(JSON.stringify(arr) === JSON.stringify(ascendingArr)){
    return 'yes, ascending';
  }else if (JSON.stringify(arr) === JSON.stringify(descendingArr)){
    return 'yes, descending';
  }else{
    return 'no';
  }
}