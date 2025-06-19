///////////////////////////////////////////////////////////////////////////////////
// String Repeat
///////////////////////////////////////////////////////////////////////////////////

// Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

///////////////////////////////////////////////////////////////////////////////////

//Method
function repeatStr(n, s) {
  return s.repeat(n);
}

// Arrow f
const repeatStr = (n, s) => s.repeat(n);

// For Loop
function repeatStr(n, s) {
  let newString = "";
  for (let i = 0; i <= n; i++) {
    newString += s;
  }
  return newString;
}

// _________________________________________________________;
