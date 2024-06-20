/*
Write a function that returns the total surface area and volume of a box as an array: [area, volume]
*/

//Answer

function getSize(w, h, d){
  return [2*(w*h+h*d+d*w),w*h*d]
}