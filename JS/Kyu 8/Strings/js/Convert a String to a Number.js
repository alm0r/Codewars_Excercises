///////////////////////////////////////////////////////////////////////////////////
// Convert a String to a Number
// ///////////////////////////////////////////////////////////////////////////////////
// We need a function that can transform a string into a number.

// What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

///////////////////////////////////////////////////////////////////////////////////

// Method
const stringToNumber = function (str) {
  return Number(str);
};

// Arrow
const stringToNumber2 = (str) => Number(str);

// Operator's Logic
var stringToNumber3 = function (str) {
  return +str;
};

// ________________________________________________________________________;
