/*
Given an integer, return a string with dash '-' marks before and after each odd digit, but do not begin or end the string with a dash mark.

Ex:
274 -> '2-7-4'
6815 -> '68-1-5'


*/

//Answer

function dashatize(num) {
    return Math.abs(num).toString().split('').map(num => {
      if(Number(num) % 2 !== 0){
        return `-${num}-`
      } else {
        return num
      }
    }).join('').replace(/--/g, '-').replace(/^-|-$/g, '')
  }