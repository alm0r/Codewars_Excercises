///////////////////////////////////////////////////////////////////////////////////
// Volume of a Cuboid
///////////////////////////////////////////////////////////////////////////////////

// Bob needs a fast way to calculate the volume of a rectangular cuboid with three values: the length, width and height of the cuboid.

// Write a function to help Bob with this calculation.

// ___________________________________________________________________;

//  Return
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

// Arrow
const Kata = {
  getVolumeOfCuboid: (length, width, height) => length * width * height,
};
