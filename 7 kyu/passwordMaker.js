/*
One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.

Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):

    instead of including i or I put the number 1 in the password;
    instead of including o or O put the number 0 in the password;
    instead of including s or S put the number 5 in the password.

Examples:
    "Give me liberty or give me death"  --> "Gml0gmd"
    "Keep Calm and Carry On"            --> "KCaC0"

tldr: convert phrase into a password, by taking the first letter of every word, and replacing what needs to be replaced
*/

//Answer

function makePassword(phrase) {
  let firstLetterOfWord = phrase.split(' ').map(word => word.slice(0, 1))
  
  
  return firstLetterOfWord.map(letter => {
    let lower = letter.toLowerCase()
    if(lower === 'i'){
      return '1'
    }else if(lower === 'o'){
      return '0'
    }else if(lower === 's'){
      return '5'
    }
    
    return letter
  }).join('')
}