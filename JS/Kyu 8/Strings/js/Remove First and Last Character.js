///////////////////////////////////////////////////////////////////////////////////
// Remove First and Last Character
///////////////////////////////////////////////////////////////////////////////////
// Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string.

// Important: Your function should handle strings of any length ≥ 2 characters. For strings with exactly 2 characters, return an empty string.

// removeChar('eloquent') // -> 'loquen'
// removeChar('country')  // -> 'ountr'
// removeChar('person')   // -> 'erso'
// removeChar('ab')       // -> '' (empty string)
// removeChar('xyz')      // -> 'y'

// FUNCTION SIGNATURE

// function removeChar(str) {
//   // Your code here
// }

// Requirements

//     - The input string will always have at least 2 characters
//     - For strings with exactly 2 characters, return an empty string
//     - For strings with 3 or more characters, remove the first and last character
//     - The function should handle strings containing letters, numbers, and special characters

// Test Cases

//     - Basic functionality with common words
//     - Edge cases with 2-character and 3-character strings
//     - Strings containing numbers and special characters
//     - Random test cases of varying lengths

///////////////////////////////////////////////////////////////////////////////////

// ___________________________________________________________________________________;

// Slice Method
function removeChar(str) {
  return str.slice(1, -1);
}

// Arrow function
const removeChar = (str) => str.slice(1, -1);

// Substring method
function removeChar(str) {
  return str.substring(1, str.length - 1);
}
// With Array Method
function removeChar(str) {
  //You got this!
  newStr = str.split("");
  newStr.shift();
  newStr.pop();
  return newStr.join("");
}
