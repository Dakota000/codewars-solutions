/*
Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. 
He wants to replace all the rotten pieces of fruit with fresh ones. 
For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. 
Your task is to implement a method that accepts an array of strings containing fruits should returns an array 
of strings where all the rotten fruits are replaced by good ones.

Notes:
    1. If the array is null/nil/None or empty you should return empty array ([]).
    2. The rotten fruit name will be in this camelcase (rottenFruit).
    3. The returned array should be in lowercase.
*/

//Answer

function removeRotten(bagOfFruits){
    if(!bagOfFruits || bagOfFruits == []){
      return []
    }
    
    return bagOfFruits.map(fruit => {
      if(fruit.includes("rotten")){
        return fruit.replace("rotten", "").toLowerCase();
      }
      
      return fruit.toLowerCase();
    })
  }