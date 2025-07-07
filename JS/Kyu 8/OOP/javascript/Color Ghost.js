///////////////////////////////////////////////////////////////////////////////////
// Color Ghost
///////////////////////////////////////////////////////////////////////////////////

// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiatedlson prime and false otherwise.

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"

// ___________________________________________________________________;

class Ghost {
  constructor() {
    let colors = ["white", "yellow", "purple", "red"];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }
}

class Ghost {
  constructor() {
    this.colors = ["white", "yellow", "purple", "red"];
  }
  get color() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }
}

class Ghost {
  constructor() {
    this.color = [`red`, `yellow`, `purple`, `white`][(Math.random() * 4) ^ 0];
  }
}
