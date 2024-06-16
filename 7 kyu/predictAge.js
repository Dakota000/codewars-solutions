/*
Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.
Example
predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
Note: the result should be rounded down to the nearest integer.

Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.
*/

//Answer

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let grandparents = [age1,age2,age3,age4,age5,age6,age7,age8]
    return Math.floor(Math.sqrt(grandparents.map(grandparent => grandparent*grandparent).reduce((acc, c) => acc+c, 0), 2)/2)
  }