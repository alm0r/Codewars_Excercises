///////////////////////////////////////////////////////////////////////////////////
// We need a function that can transform a number (integer) into a string.
// What ways of achieving this do you know?
// Examples (input --> output):

// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

///////////////////////////////////////////////////////////////////////////////////

// Method
function numberToString(num) {
  return num.toString();
}
//Arrow
const numberToString = (num) => num.toString();

// Global function
function numberToString(num) {
  // Return a string of the number here!
  return String(num);
}

// Concatenation
function numberToString(num) {
  return "" + num;
}

// Literal notation
const numberToString = (num) => `${num}`;
_________________________________________________________________________________________;
