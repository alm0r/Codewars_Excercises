///////////////////////////////////////////////////////////////////////////////////
// Area or Perimeter
///////////////////////////////////////////////////////////////////////////////////

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.

// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):
// 6, 10 --> 32
// 3, 3 --> 9

// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

// ___________________________________________________________________;

// Basic
const areaOrPerimeter = function (l, w) {
  return l == w ? l * w : 2 * (l + w);
};

// If/Else
function areaOrPerimeter(l, w) {
  if (l === w) {
    return Math.pow(l, 2);
  } else {
    return (l + w) * 2;
  }
}

// Arrow
const areaOrPerimeter = (l, w) => (l === w ? l * w : (l + w) * 2);

// Variables
const areaOrPerimeter = function (l, w) {
  let area = l * w;
  let perimeter = (l + w) * 2;

  return l === w ? area : perimeter;
};
