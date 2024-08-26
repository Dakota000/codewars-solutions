/*
Write a simple function to check if the string contains the word hallo in different languages.

These are the languages of the possible people you met the night before:
    hello - english
    ciao - italian
    salut - french
    hallo - german
    hola - spanish
    ahoj - czech republic
    czesc - polish

Notes:
    1. you can assume the input is a string.
    2. to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
    3. function should be case insensitive to pass the tests

*/

//Answer

function validateHello(greetings){
  let greetingLanguage = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc']
  return greetingLanguage.some(greeting => greetings.toLowerCase().includes(greeting))
}