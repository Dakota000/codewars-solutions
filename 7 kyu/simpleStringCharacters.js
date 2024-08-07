/*
In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.

*/

//Answer

function solve(s) {
  let uppercases = s.split('').filter(letter => /[A-Z]/.test(letter)).length;
  let lowercases = s.split('').filter(letter => /[a-z]/.test(letter)).length;
  let numbers = s.split('').filter(letter => /[0-9]/.test(letter)).length;
  let symbols = s.split('').filter(letter => /[^A-Za-z0-9]/.test(letter)).length;
  
  return [uppercases, lowercases, numbers, symbols];
}