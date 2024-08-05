/*
Task:
Given a number determine if it Automorphic or not .

Definition:
A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

Notes:
The number passed to the function is positive
*/

//Answer

function automorphic(n){ 
  return Number(Math.pow(n, 2).toString().slice(-n.toString().length)) === n ? 'Automorphic': 'Not!!'
}