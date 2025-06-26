///////////////////////////////////////////////////////////////////////////////////
// Fake Binary
///////////////////////////////////////////////////////////////////////////////////

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

///////////////////////////////////////////////////////////////////////////////////

// Methods
function fakeBin(x) {
  let stringArray = x.split("");
  let finalArray = numArray.map((element, i) => (element < 5 ? (numArray[i] = 0) : (numArray[i] = 1)));
  return finalArray.join("");
}

// Arrow
function fakeBin(x) {
  return x
    .split("")
    .map((n) => (n < 5 ? 0 : 1))
    .join("");
}

// Method forEach reassing [i]
function fakeBin(x) {
  let stringArray = x.split("");
  stringArray.forEach((element, i) => (element < 5 ? (stringArray[i] = 0) : (stringArray[i] = 1)));
  return stringArray.join("");
}

// Methods forEach
function fakeBin(x) {
  let result = [];
  x.split("").forEach((element) => {
    result.push(element < 5 ? "0" : "1");
  });
  return result.join("");
}

// For Loop
function fakeBin(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (Number(str[i]) >= 5) {
      newStr += "1";
    } else {
      newStr += "0";
    }
  }
  return newStr;
}
