/*
Given a year, return the century it is in.

Examples:
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
2742 --> 28

Note: this kata uses strict construction as shown in the description and the examples
*/

//Answer

const century = (year) => Math.ceil((year/100))