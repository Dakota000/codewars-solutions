/*
Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).
Note:
    1. If num is negative, ignore its sign and treat it as a positive value
    2. If nth is not positive, return -1
    3. Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0

Examples(num, nth --> output):
    5673, 4 --> 5
    129, 2 --> 2
    -2825, 3 --> 8
    -456, 4 --> 0
    0, 20 --> 0
    65, 0 --> -1
    24, -8 --> -1
*/

//Answer

function findDigit(num, nth) {
  if (nth <= 0) {
    return -1;
  }
  
  let numStr = Math.abs(num).toString().split('');
  let reversed = numStr.reverse();

  return nth > reversed.length ? 0 : Number(reversed[nth - 1]);
}