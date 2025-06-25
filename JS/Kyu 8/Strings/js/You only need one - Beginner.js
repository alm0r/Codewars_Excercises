///////////////////////////////////////////////////////////////////////////////////
// You only need one - Beginner
///////////////////////////////////////////////////////////////////////////////////

// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// a can contain numbers or strings. x can be either.

// Return true if the array contains the value, false if not.

///////////////////////////////////////////////////////////////////////////////////

let testArray = ["Blue", "Orange", "Red", 7];
let value = 7;

// Method includes
function check(a, x) {
  if (a.includes(x)) {
    return true;
  } else {
    return false;
  }
}

// Method includes cleaner
function check(a, x) {
  return a.includes(x);
}

// Arroy Ternary
const check = (a, x) => (a.includes(x) ? true : false);

// Arrow cleaner
const check = (a, x) => a.includes(x);

// Method some
function check(a, x) {
  return a.some((element) => element === x);
}

// Method indexof
function check(a, x) {
  return a.indexOf(x) > -1;
}

// For Loop
function check(a, x) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === x) {
      return true;
    }
  }
  return false;
}

// forEach Loop external variable
function check(a, x) {
  let found = false;
  a.forEach((element) => {
    if (element === x) {
      found = true;
    }
  });
  return found;
}
