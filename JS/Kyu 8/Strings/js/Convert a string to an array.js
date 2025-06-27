///////////////////////////////////////////////////////////////////////////////////
//Convert a string to an array
///////////////////////////////////////////////////////////////////////////////////

// Write a function to split a string and convert it into an array of words.function stringToArray(string) {

// Examples (Input ==> Output):

//   "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
///////////////////////////////////////////////////////////////////////////////////

// Method
function stringToArray(string) {
  return string.split(" ");
}

// Arrow
const stringArray = (string) => string.split(" ");

// For Loop
function stringToArray(string) {
  let newStr = "";
  let result = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      newStr = newStr + string[i];
    } else {
      result.push(newStr);
      newStr = "";
    }
  }
  result.push(newStr);
  return result;
}
