/*
You have access to the ship "draft" and "crew". "Draft" is the total ship weight and "crew" is the number of humans on the ship.

Each crew member adds 1.5 units to the ship draft. If after removing the weight of the crew, the draft is still more than 20, then the ship is worth looting. Any ship weighing that much must have a lot of booty!

Add the method

isWorthIt
to decide if the ship is worthy to loot. For example:

titanic.isWorthIt() // return false
Good luck and may you find GOOOLD!
*/

//Answer

class Ship {
  constructor(draft, crew) {
    this.draft = draft
    this.crew = crew
  }
  
  isWorthIt() {
    return (this.draft - this.crew * 1.5) > 20;
  }
}