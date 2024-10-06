/*
Escape the room

You are creating an "Escape the room" game. The first step is to create a hash table called rooms that contains all of the rooms of the game. There should be at least 3 rooms inside it, each being a hash table with at least three properties (e.g. name, description, completed).
*/

//Answer

class Room {
  constructor(name = '', description = '', completed = false) {
    this.name = name;
    this.description = description;
    this.completed = completed;
  }
}

var rooms = {
  bedroom: new Room("bedroom", "a comfy bedroom", true),
  kitchen: new Room("kitchen", "A sleek kitchen", true),
  bathroom: new Room("bathroom", "A clean bathroom", true),
}