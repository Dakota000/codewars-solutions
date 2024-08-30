/*
Task: Create a function that takes a number as an argument and returns a grade based on that number.

Score: 	    Grade:
Anything > than 1 or < than 0.6: "F"
0.9 or >:   "A"
0.8 or >: 	"B"
0.7 or >: 	"C"
0.6 or >: 	"D"

Examples:
    grader(0)   should be "F"
    grader(1.1) should be "F"
    grader(0.9) should be "A"
    grader(0.8) should be "B"
    grader(0.7) should be "C"
    grader(0.6) should be "D"
*/

//Answer

function grader(score) {
  return score > 1 || score < 0.6 ? 'F' : score >= 0.9 ? 'A' : score >= 0.8 ? 'B' : score >= 0.7 ? 'C' : 'D' 
}