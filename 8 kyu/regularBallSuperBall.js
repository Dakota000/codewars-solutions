/*
Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"
*/

//Answer

var Ball = function(ballType) {
    if(ballType === 'super'){
      this.ballType = 'super'
      return this.ballType
    }else{
      this.ballType = 'regular'
      return this.ballType
    }
};