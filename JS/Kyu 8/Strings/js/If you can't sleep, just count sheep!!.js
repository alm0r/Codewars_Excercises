///////////////////////////////////////////////////////////////////////////////////
// If you can't sleep, just count sheep!!
///////////////////////////////////////////////////////////////////////////////////

// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

///////////////////////////////////////////////////////////////////////////////////

// Array method
function countSheep(num) {
  return Array.from({ length: num }, (element, i) => `${i + 1} sheep...`).join("");
}

// Array method
function countSheep(num) {
  return [...Array(num).keys()].map((x) => `${x + 1} sheep...`).join("");
}

// Arrow
countSheep = (num) => [...Array(num).keys()].map((x) => `${x + 1} sheep...`).join``;

// // Array method
function countSheep(num) {
  const arr = [];
  for (i = 1; i <= num; i++) {
    arr.push(i + " sheep...");
  }
  return arr.join("");
}

// //  For Loop concatenation
let countSheep = function (num) {
  let newString = "";
  for (let i = 1; i <= num; i++) {
    newString += [i] + " " + "sheep...";
    `${[i]} ...sheep`;
  }
  return newString;
};

// //  For Loop literal notation
let countSheep = function (num) {
  let newString = "";
  for (let i = 1; i <= num; i++) {
    newString += `${[i]} sheep...`;
  }
  return newString;
};
