///////////////////////////////////////////////////////////////////////////////////
// Complete the solution so that it reverses the string passed into it.
///////////////////////////////////////////////////////////////////////////////////

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// Method 1
function reverser(string) {
  return string.split("").reverse().join("");
}

reverser("world");
reverser("word");

// With arrow function
const solutionArrow = (str) => str.split("").reverse().join("");

// Longer a Basic
function solutionBasic(str) {
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
}

console.log(solutionBasic("world"));

//Method 2
function loopReverser(string) {
  let reversedWord = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedWord += string[i];
  }
  return reversedWord;
}

loopReverser("world");
loopReverser("word");
// ___________________________________________________________________________________;
