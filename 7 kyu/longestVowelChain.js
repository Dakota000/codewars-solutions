/*
The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. 
Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, 
return the length of the longest vowel substring. Vowels are any of aeiou.

Good luck!
*/

//Answer

function solve(s){
  let curr = 0;
  let max = 0;
  
  for(let i = 0; i<=s.length; i++){
    if('aeiou'.includes(s[i])){
      curr++;
      
      if(curr > max){
        max = curr;
      }
    }else{
      curr = 0;
    }
  }
  
  return max
}