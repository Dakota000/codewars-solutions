/*
Your goal is to return multiplication table for number that is always an integer from 1 to 10.

For example, a multiplication table (string) for number == 5 looks like below:

1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
P. S. You can use \n in string to jump to the next line.
*/

//Answer

function multiTable(num) {
   return`${1} * ${num} = ${1 * num}\n` +
         `${2} * ${num} = ${2 * num}\n` +
         `${3} * ${num} = ${3 * num}\n` +
         `${4} * ${num} = ${4 * num}\n` +
         `${5} * ${num} = ${5 * num}\n` +
         `${6} * ${num} = ${6 * num}\n` +
         `${7} * ${num} = ${7 * num}\n` +
         `${8} * ${num} = ${8 * num}\n` +
         `${9} * ${num} = ${9 * num}\n` +
         `${10} * ${num} = ${10 * num}`;
}