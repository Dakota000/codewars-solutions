/*
For this kata you will have to forget how to add two numbers.

It can be best explained using the following meme:

Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers.

Examples:
     16       26
   + 18     + 39
   ----     ----
   2 14     5 15 => 214 and 515

   122        72
  + 81      +  9
  -----     -----
   1 10 3     7 11 => 1103 and 711
*/

//Answer

function add(num1, num2) {
    num1 = num1.toString().split("").reverse().join("");
    num2 = num2.toString().split("").reverse().join("");

    if (num1.length < num2.length) {
        [num1, num2] = [num2, num1];
    }

    let returnString = "";
    for(let i = 0; i < num1.length; i++){
        let int1 = parseInt(num1[i]);
        let int2 = parseInt(num2[i] || 0);
      
        returnString = (int1+ int2).toString()+returnString;
    }
    
    return parseInt(returnString);
}