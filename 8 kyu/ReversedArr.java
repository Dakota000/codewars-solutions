/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/

//Answer

import java.util.stream.IntStream;

//Change to Sequence to work in codewars
public class ReversedArr{

  public static int[] reverse(int n){
    return IntStream.rangeClosed(1, n)
                    .map(i -> n - i + 1)
                    .toArray();
  }
}