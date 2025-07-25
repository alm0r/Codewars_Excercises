///////////////////////////////////////////////////////////////////////////////////
// Powers of 2
///////////////////////////////////////////////////////////////////////////////////

// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples

// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

// ___________________________________________________________________;

// For Loop
function powersOfTwo(n) {
  let finalArray = [];
  for (let i = 0; i <= n; i++) {
    finalArray.push(Math.pow(2, i));
  }
  return finalArray;
}

// Array from method
function powersOfTwo(n) {
  return Array.from({ length: n + 1 }, (element, i) => 2 ** i);
}

// ... Method
function powersOfTwo(n) {
  return [...Array(n + 1)].map((_, i) => 2 ** i);
}
