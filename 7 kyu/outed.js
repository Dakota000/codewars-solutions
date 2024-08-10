/*
Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

Happiness rating will be total score / number of people in the room.

Note that your boss is in the room (boss), their score is worth double it's face value (but they are still just one person!).
*/

//Answer

function outed(meet, boss){
  for(let data in meet){
    if(data === boss){
      meet[data] *= 2
    }
  }
  
  return Object.values(meet).reduce((acc, c) => acc+c, 0)/Object.values(meet).length <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'
}