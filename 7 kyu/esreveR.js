/*
Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated)
*/

//Answer

reverse = function(array) {
  let answer = []
  while(array.length){
    answer.push(array.pop())
  }

  return answer
}