/*
Create a method (JS: function) every which returns every nth element of an array.

Usage

With no arguments, array.every it returns every element of the array.
With one argument, array.every(interval) it returns every intervalth element.
With two arguments, array.every(interval, start_index) it returns every intervalth element starting at index start_index

Note: due to fact JS translation ask for a function instead of an Array method the above uses will be :

javascript:                          ruby:
every(array)                         array.every
every(array, interval)               array.every(interval)
every(array, interval, start_index)  array.every(interval, start_index)
Examples

every([0,1,2,3,4])     // [0,1,2,3,4]
every([0,1,2,3,4],1)   // [0,1,2,3,4]
every([0,1,2,3,4],2)   // [0,2,4]
every([0,1,2,3,4],3)   // [0,3]
every([0,1,2,3,4],3,1) // [1,4]

Notes:
Test cases:
interval will always be a positive integer (but may be larger than the size of the array).
start_index will always be within the bounds of the array.

Once you have completed this kata, try the advanced version (http://www.codewars.com/kata/every-nth-array-element-advanced) which allows negative intervals and unbounded start_indexes

Translator notes:
Ruby is the original language for this kata.
*/

//Answer

function every(arr, interval = 1, start = 0){
	return arr.slice(start).filter((a, i) => i % interval === 0)
}