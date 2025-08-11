///////////////////////////////////////////////////////////////////////////////////
// Sum of positive
///////////////////////////////////////////////////////////////////////////////////
// You get an array of numbers, return the sum of all of the positives ones.

// Example

// [1, -4, 7, 12] => 1 + 7 + 12 = 20

// Note
// If there is nothing to sum, the sum is default to 0.
// ___________________________________________________________________________________;

// For Loop
function positiveSum(arr) {
  let finalNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) finalNum += arr[i];
  }
  return finalNum;
}

//  Method.
function positiveSum(arr) {
  return arr.reduce((acc, c) => acc + (c > 0 ? c : 0), 0);
}
