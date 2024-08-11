/*
In this kata, the function will take a string as its argument, and return a string with every word replaced by the explanation to everything (sex), according to Freud. Note that an empty string, or no arguments, should return an empty string.
*/

//Answer

function toFreud(str){
  if(!str){
    return ''
  }
  
  return str.split(' ').map(word => word = 'sex').join(' ')
}