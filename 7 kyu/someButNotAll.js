/*
Your task is to create a function that given a sequence and a predicate, returns True if only some (but not all) the elements in the sequence are True after applying the predicate

Examples:
   ('abcdefg&%$', x -> isLetter(x)) == true
   ('&%$=', x -> isLetter x) == false
   ('abcdefg', x -> isLetter x) == false

   ([4, 1], x -> x > 3) == true
   ([1, 1], x -> x > 3) == false
   ([4, 4], x -> x > 3) == false
*/

//Answer

const someButNotAll = (seq,pred) => {
  const arr = Array.from(seq)
    
  return arr.some(pred) && !arr.every(pred)
}