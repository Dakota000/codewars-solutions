/*
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata
*/

//Answer

function shortcut (string) {
  let str = string.split('')
  
  for(let i = 0; i < str.length; i++){
    if(str[i] === 'a'){
      str[i] = ''
    }else if(str[i] === 'e'){
      str[i] = ''
    }else if(str[i] === 'i'){
      str[i] = ''
    }else if(str[i] === 'o'){
      str[i] = ''
    }else if(str[i] === 'u'){
      str[i] = ''
    }
  }
  return str.join('')
}