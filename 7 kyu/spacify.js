/*
Modify the spacify function so that it returns the given string with spaces inserted between each character.

Example:
spacify("hello world") // returns "h e l l o   w o r l d"
*/

//Answer

function spacify(str) {
  return str.split("").join(" ");
}