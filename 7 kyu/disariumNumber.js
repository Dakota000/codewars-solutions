/*
Definition: Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

Task: Given a number, Find if it is Disarium or not .

Notes:
    1. Number passed is always Positive .
    2. Return the result as String
*/

//Answer

function disariumNumber(n){
  return n.toString().split('').map((num, i) => Math.pow(Number(num), i+1)).reduce((acc, c) => acc+c, 0) === n ? `Disarium !!` : `Not !!`
}