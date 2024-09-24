/*
Functional closures can get overly attached. Set them straight!

Why doesn't greetAbe() actually greet Abe?
*/

//Answer

const greetAbe = greet('Abe');
const greetBen = greet('Ben');

function greet(name) {
  return function(){
    return `Hello, ${name}!`;
  };
}