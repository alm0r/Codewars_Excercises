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
