///////////////////////////////////////////////////////////////////////////////////
// Points of Reflection
///////////////////////////////////////////////////////////////////////////////////

// "Point reflection" or "point symmetry" is a basic concept in geometry where a given point, P, at a given position relative to a mid-point, Q has a corresponding point, P1, which is the same distance from Q but in the opposite direction.

// Given two points P and Q, output the symmetric point of point P about Q. Each argument is a two-element array of integers representing the point's X and Y coordinates. Output should be in the same format, giving the X and Y coordinates of point P1. You do not have to validate the input.
// ___________________________________________________________________;

// symmetric = 2 * q - p

// Basic Math
function symmetricPoint(p, q) {
  return [q[0] - (p[0] - q[0]), q[1] - (p[1] - q[1])];
}

// Arrow
const symmetricPoint = (p, q) => [q[0] - (p[0] - q[0]), q[1] - (p[1] - q[1])];

// Dif Math
function symmetricPoint(p, q) {
  return [2 * q[0] - p[0], 2 * q[1] - p[1]];
}
// / Dif Math
const symmetricPoint = ([a, b], [c, d]) => [c * 2 - a, d * 2 - b];

// Array Method
function symmetricPoint(p, q) {
  return p.map((a, i) => q[i] * 2 - a);
}
