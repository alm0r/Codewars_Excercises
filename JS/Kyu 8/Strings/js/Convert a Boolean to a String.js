///////////////////////////////////////////////////////////////////////////////////
// Convert a Boolean to a String
///////////////////////////////////////////////////////////////////////////////////

// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

///////////////////////////////////////////////////////////////////////////////////

//Method
function booleanToString(b) {
  return b.toString();
}

//Arrow
const booleanToString = (b) => b.toString();

// Built-in Function
function booleanToString(b) {
  return String(b);
}

// Literal  Notation
function booleanToString(b) {
  return `${b}`;
}

// Concatenation
function booleanToString(b) {
  return b + "";
}

// Ternary
const booleanToString = (b) => (b ? "true" : "false");
