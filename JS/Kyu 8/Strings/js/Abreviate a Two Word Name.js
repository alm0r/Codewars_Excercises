///////////////////////////////////////////////////////////////////////////////////
// Abbreviate a Two Word Name
///////////////////////////////////////////////////////////////////////////////////

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

///////////////////////////////////////////////////////////////////////////////////

// With the splpit Method
function abbrevName(name) {
  let nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

// Arrow function
function abbrevName(name) {
  // prettier-ignore
  return name.split(" ").map((x) => x.substr(0, 1).toUpperCase()).join(".");
}

// Split with map method
function abbrevName(name) {
  // prettier-ignore
  return name.split(" ").map((i) => i[0].toUpperCase()).join(".");
}

// Index of
function abbrevName(name) {
  return name[0].toUpperCase() + "." + name[name.indexOf(" ") + 1].toUpperCase();
}

// With For Loop

function abbrevName(name) {
  let initials = name[0];
  for (let i = 0; i < name.length; i++) {
    if (name[i] == " ") {
      initials = (name[0] + "." + name[i + 1]).toUpperCase();
      // initials = `${name[0]}.${name[i + 1]}`.toUpperCase();
    }
  }
  return initials;
}

//  With Arrays and Subtring Method

function abbrevName(name) {
  let initials = ["."];
  let nameArray = name.split(" ");
  initials.unshift(nameArray[0].substring(0, 1));
  initials.push(nameArray[1].substring(0, 1));
  return initials.join("").toUpperCase();
}

//  With Arrays and Slice Method

function abbrevName(name) {
  let initials = ["."];
  let nameArray = name.split(" ");
  initials.unshift(nameArray[0].slice(0, 1));
  initials.push(nameArray[1].slice(0, 1));
  return initials.join("").toUpperCase();
}

// _________________________________________________________________________________________;
