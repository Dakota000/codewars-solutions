/*
Create a combat function that takes the player's current health and the amount of damage recieved, 
and returns the player's new health. Health can't be less than 0.
*/

//Answer

function combat(health, damage) {
    if(health-damage <= 0){
      return 0
    }else{
       return health - damage
    }
  }