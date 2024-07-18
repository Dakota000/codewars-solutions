/*
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.
*/

//Answer

function divCon(x){
    let strSum = x.filter(element => element !== Number(element)).map(str => Number(str)).reduce((acc, c) => acc+c, 0)
    let numSum = x.filter(element => element === Number(element)).reduce((acc, c) => acc+c, 0)
    
    return numSum - strSum
  }