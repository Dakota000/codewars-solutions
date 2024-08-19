/*
Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD
*/

//Answer

function alternateCase(s) {
  return s.split('').map(letter => {
    if(letter === letter.toUpperCase()){
      return letter.toLowerCase()
    }else{
      return letter.toUpperCase()
    }
  }).join('')
}