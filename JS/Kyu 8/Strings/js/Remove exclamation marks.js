///////////////////////////////////////////////////////////////////////////////////
//Remove exclamation marks
///////////////////////////////////////////////////////////////////////////////////

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

///////////////////////////////////////////////////////////////////////////////////

// Method
function removeExclamationMarks(s) {
  return s.replaceAll("!", "");
}
// Arrow
const removeExclamationMarks = (s) => s.replaceAll("!", "");

// Method
function removeExclamationMarks(s) {
  return s.split("!").join("");
}

// Arrow
const removeExclamationMarks = (s) => s.split("!").join("");

// Method
function removeExclamationMarks(s) {
  let arr = s.split("");
  arr = arr.filter(function (e) {
    return e !== "!";
  });
  return arr.join("");
}

// ForLoop
function removeExclamationMarks(s) {
  let newString = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] != "!") {
      newString += s[i];
    }
  }
  return newString;
}
