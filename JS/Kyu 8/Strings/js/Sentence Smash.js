///////////////////////////////////////////////////////////////////////////////////
// Sentence Smash
///////////////////////////////////////////////////////////////////////////////////

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.

// You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word.

// Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example

// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

// words = ['hello', 'world', 'this', 'is', 'great']
// smash(words) # returns "hello world this is great"

// Assumptions

// You can assume that you are only given words.
// You cannot assume the size of the array.
// You can assume that you do get an array.

///////////////////////////////////////////////////////////////////////////////////

let wordsArray = ["hello", "world", "this", "is", "great"];
// let wordsArray = ["hello"];

// Method
function smash(words) {
  return words.join(" ");
}

// Arrow
const smash = (words) => words.join(" ");

// For Loop
function smash(words) {
  let finalString = "";
  for (let i = 0; i < words.length; i++) {
    finalString += words[i];
    if (i != words.length - 1) {
      finalString += " ";
    }
  }
  return finalString;
}

// forEach Loop
function smash(words) {
  let finalString = "";
  words.forEach((element, i) => {
    finalString += element;
    if (i != words.length - 1) {
      finalString += " ";
    }
  });
  return finalString;
}
