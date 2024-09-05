/*
Task: In this kata you are required to, given a string, replace every letter with its position in the alphabet.

Note: If anything in the text isn't a letter, ignore it and don't return it.
   "a" = 1, "b" = 2, etc.

Example:
   Input = "The sunset sets at twelve o' clock."
   Output = "20 8 5 19 21 14 19 5 20 19 5 20 19
*/

//Answer

function alphabetPosition(text) {
  const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

  return text.toLowerCase().split('').map(character => {
    return alphabet.includes(character) ?`${alphabet.indexOf(character)+1} ` : ''
  }).join('').slice(0, -1)
}