/*
Description:
We want to generate a function that computes the series starting from 0 and ending until the given number.

Examples:
Input:
> 6

Output:
'0+1+2+3+4+5+6 = 21'

Input:
> -15

Output:
'-15<0'

Input:
> 0

Output:
'0=0'
*/

//Answer

var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    let arr = [];
    if(count === 0){
      return `0=0`
    }else if(Math.sign(count) === -1){
      return `${count}<0`
    }
    for (let i = 0; i <= count; i++) {
      arr.push(i);
    }
    return `${arr.join('+')} = ${arr.reduce((acc, c) => acc+c, 0)}`;
  };

  return SequenceSum
})();