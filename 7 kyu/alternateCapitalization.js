/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.
*/

//Answer

function capitalize(s){
  return [s.split('').map((e, i) => {
    if(i%2===0){
      return e.toUpperCase()
    }else{
      return e
    }
  }).join(''), 
    s.split('').map((e, i) => {
    if(i%2!==0){
      return e.toUpperCase()
    }else{
      return e
    }
  }).join('')]
  
  
}