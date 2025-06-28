///////////////////////////////////////////////////////////////////////////////////
// Even or Odd
///////////////////////////////////////////////////////////////////////////////////

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// ___________________________________________________________________________________;

//  Ternary
function evenOrOdd(number) {
  return number % 2 == 0 ? "Even" : "Odd";
}

// Arrow
const evenOrOdd = (number) => (number % 2 == 0 ? "Even" : "Odd");

//  If/Else
function evenOrOdd(number) {
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
