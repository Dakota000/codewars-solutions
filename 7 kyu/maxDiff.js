/*
You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

Notes:
1. lst contains integers, that means it may contain some negative numbers
2. if lst is empty or contains a single element, return 0
3. lst is not sorted
*/

//Answer

function maxDiff(list) {
  if(list.length <= 1){
    return 0
  }
  function maxDiff(list) {
  if(list.length <= 1){
    return 0
  }
  
  return Math.abs(Math.max(...list) - Math.min(...list))
}
  return Math.abs(Math.max(...list) - Math.min(...list))
}