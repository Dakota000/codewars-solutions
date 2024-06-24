/*
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/

//Answer

var greet = function(name) {
  let nameArr = name.toLowerCase().split('')
  nameArr[0] = nameArr[0].toUpperCase()
  return `Hello ${nameArr.join('')}!`
};