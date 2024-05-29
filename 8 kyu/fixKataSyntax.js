/*
In this Kata you should fix/create a program that returns the following values:

false/False if either a or b (or both) are not numbers
a % b plus b % a if both arguments are numbers
You may assume the following:

If a and b are both numbers, neither of a or b will be 0.
In this Kata you should try to fix all the syntax errors found in the code.

Once you think all the bugs are fixed run the code to see if it works.
A correct solution should return the values specified in the overview.
*/

//Answer
function myFirstKata(a, b) {
  if(typeof(a) != "number" || typeof(b) != "number"){
    return false;
  }else{
    return a % b + b % a;
  }
}