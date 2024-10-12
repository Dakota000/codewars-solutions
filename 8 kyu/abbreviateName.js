/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

//Answer

function abbrevName(name){
  const firstIntial = name.split(' ')[0][0];
  const lastIntial = name.split(' ')[1][0];
  
  return `${firstIntial}.${lastIntial}`.toUpperCase();
}