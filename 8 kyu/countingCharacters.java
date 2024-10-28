/*
Define a method named countCharOccurrences that accepts a string and a char as inputs and returns the number of times the char occurs in the string as an int.
*/

//Answer

interface Count {
	static int countCharOccurrences(String s, char c) {
    return s.length() - s.replaceAll(String.valueOf(c), "").length();
  }
}