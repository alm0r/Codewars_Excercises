///////////////////////////////////////////////////////////////////////////////////
// Are you Playing Banjo?
///////////////////////////////////////////////////////////////////////////////////
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo"
// name + " does not play banjo"

///////////////////////////////////////////////////////////////////////////////////

// Method 1
function areYouPlayingBanjo(name) {
  if (name.charAt(0) === "R" || name.charAt(0) === "r") {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}

//Cleaner
function areYouPlayingBanjo(name) {
  if (name[0].toLowerCase() === "r") {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}

//Ternary
function areYouPlayingBanjo(name) {
  return name + (name[0].toLowerCase() == "r" ? " plays" : " does not play") + " banjo";
}

//Arrow + Ternary
const areYouPlayingBanjo = (name) => {
  const plays = name.toLowerCase().startsWith("r") ? "plays" : "does not play";
  return `${name} ${plays} banjo`;
};

// ___________________________________________________________________________________;
