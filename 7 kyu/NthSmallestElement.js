/*
Given an array/list of integers, find the Nth smallest element in the array.
*/

//Answer

function nthSmallest(arr, pos){
  return arr.sort((a,b) => a-b)[pos-1]
}