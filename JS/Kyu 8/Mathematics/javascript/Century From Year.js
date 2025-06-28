///////////////////////////////////////////////////////////////////////////////////
// Century From Year
///////////////////////////////////////////////////////////////////////////////////

// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Task

// Given a year, return the century it is in.

// Examples

// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28

// ___________________________________________________________________;

// Method
const century = (year) => Math.ceil(year / 100);

// Shorthand
function century(year) {
  return ((year + 99) / 100) | 0;
}

// For Loop
function century(year) {
  let century = 0;

  for (var i = 0; i < year; i++) {
    if (i % 100 == 0) {
      century++;
    }
  }
  return century;
}

// If/Else
function century(year) {
  let digits = String(year).length;
  if (digits === 4) {
    if (Number(String(year).substring(2, 4)) == "00") {
      return Number(String(year).substring(0, 2));
    } else {
      return Number(String(year).substring(0, 2)) + 1;
    }
  } else if (digits === 3) {
    if (Number(String(year).substring(1, 3)) == "00") {
      return Number(String(year).substring(0, 1));
    } else {
      return Number(String(year).substring(0, 1)) + 1;
    }
  } else {
    return 1;
  }
}
