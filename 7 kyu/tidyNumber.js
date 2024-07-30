/*
Given a number, Find if it is Tidy or not .
Definition: A Tidy number is a number whose digits are in non-decreasing order.
*/

//Answer

function tidyNumber(num){
  let digits = num.toString().split('').map(Number)
  let sortedDigits = [...digits].sort((a,b) => a-b)
  
  for(let i = 0; i < digits.length; i++){
    if(digits[i] !== sortedDigits[i]){
      return false;
    }
  }
  
  return true;
}