/*
Remember the spongebob meme that is meant to make fun of people by repeating what they say in a mocking way?

<insert funny spongebob image>

"Dont use that weird spongebob mocking meme" Me: DonT uSe thAt WeIrd SpoNgEboB MoCkinG MEme

Task: You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.

Example:
    input:  "stop Making spongebob Memes!"
    output: "StOp mAkInG SpOnGeBoB MeMeS!"
*/

//Answer

function spongeMeme(sentence) {
  return sentence.split('').map((letter,i) => i % 2 ? letter.toLowerCase(): letter.toUpperCase()).join('');
}