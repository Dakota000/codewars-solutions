/*
Your task is to write function factorial.
*/

//Answer

function factorial(n){
  if(n === 0 || n === 1){
    return 1
  }
  for(let i = n - 1; i >= 1; i--) {
    n = n * i;
  }
  return n;
}