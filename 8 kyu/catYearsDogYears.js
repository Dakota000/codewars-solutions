/*
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
     15 cat years for first year
    +9 cat years for second year
    +4 cat years for each year after that
Dog Years
    15 dog years for first year
    +9 dog years for second year
    +5 dog years for each year after that
*/

//Answer

var humanYearsCatYearsDogYears = function(humanYears){
  let cat = 15;
  let dog = 15;

  if(humanYears >= 2){
    cat += 9;
    dog += 9;
  }

  if(humanYears > 2){
    for (let i = 3; i <= humanYears; i++){
      cat += 4;
      dog += 5;
    }
  }

  return [humanYears, cat, dog]
}