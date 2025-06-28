///////////////////////////////////////////////////////////////////////////////////
// Grasshopper - Summation
///////////////////////////////////////////////////////////////////////////////////

// Write a program that finds the summation of every number from 1 to num (both inclusive). The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

// ___________________________________________________________________;

// Algorithm
const summation = (n) => (n * (n + 1)) / 2;

// For Loop
function summation(num) {
  let finalNumber = 0;
  for (let i = 1; i <= num; i++) {
    finalNumber += i;
    console.log(finalNumber);
  }
  return finalNumber;
}

// Array
function summation(num) {
  return [...Array(num).keys()].reduce((total, i) => total + i, 0) + num;
}

// Array
function summation(num) {
  return Array.from({ length: num }, (element, i) => 1 + i).reduce((sum, n) => sum + n, 0);
}
