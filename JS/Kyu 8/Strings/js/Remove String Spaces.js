///////////////////////////////////////////////////////////////////////////////////
// Write a function that removes the spaces from the string, then return the resultant string.
///////////////////////////////////////////////////////////////////////////////////

// Examples (input -> output)
// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"

///////////////////////////////////////////////////////////////////////////////////

//Method
function noSpace(string) {
  return string.replaceAll(" ", "");
}

// Array Method
function noSpace(string) {
  return string.split(" ").join("");
}

// Arrow
const noSpace = (x) => x.replace(/ /g, "");

// Loop
function noSpace(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      result += string[i];
    }
  }
  return result;
}
// _________________________________________________________;
