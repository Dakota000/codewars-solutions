/*
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13

Bash note:
    input : 2 strings with substrings separated by ,
    output: number as a string
*/

//Answer

function mxdiflg(a1, a2) {
  if(a1.length === 0 || a2.length === 0){
      return -1;
  }

  let maxLenA1 = Math.max(...a1.map(x => x.length));
  let minLenA1 = Math.min(...a1.map(x => x.length));

  let maxLenA2 = Math.max(...a2.map(y => y.length));
  let minLenA2 = Math.min(...a2.map(y => y.length));

  let diff1 = Math.abs(maxLenA1 - minLenA2);    
  let diff2 = Math.abs(maxLenA2 - minLenA1);

  return Math.max(diff1, diff2);
}