/*
Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)
*/

//Answer

function squareArea(A){
  return Math.pow((A*4)/(2*Math.PI), 2)
}