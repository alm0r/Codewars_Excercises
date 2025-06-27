///////////////////////////////////////////////////////////////////////////////////
//Grasshopper - Personalized Message
///////////////////////////////////////////////////////////////////////////////////

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case 	             return
// name equals owner 	'Hello boss'
// otherwise 	        'Hello guest'

///////////////////////////////////////////////////////////////////////////////////

// If/Else
function greet(name, owner) {
  if (name === owner) {
    return `Hello boss`;
  } else {
    return `Hello guest`;
  }
}

// Cleaner
function greet(name, owner) {
  return `Hello ${name == owner ? "boss" : "guest"}`;
}

// Arrow
const greet = (name, owner) => (name === owner ? "Hello boss" : "Hello guest");
