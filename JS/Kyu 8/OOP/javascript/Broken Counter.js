///////////////////////////////////////////////////////////////////////////////////
// Broken Counter
///////////////////////////////////////////////////////////////////////////////////

// Our counter prototype is broken. Can you spot, what's wrong here?

// ___________________________________________________________________;

//

function Counter() {
  this.value = 0;
}

Counter.prototype.increase = function () {
  this.value++;
};

Counter.prototype.getValue = function () {
  return this.value;
};

Counter.prototype.reset = function () {
  this.value = 0;
};

// Class
class Counter {
  constructor() {
    this.value = 0;
  }

  increase() {
    this.value++;
  }

  getValue() {
    return this.value;
  }

  reset() {
    this.value = 0;
  }
}

// Prototype
function Counter() {
  this.value = 0;
}

Counter.prototype = {
  increase: function () {
    this.value++;
  },
  getValue: function () {
    return this.value;
  },
  reset: function () {
    this.value = 0;
  },
};

// Shorthand
class Counter {
  constructor() {
    this.reset();
  }
  increase() {
    this.value++;
  }
  getValue() {
    return this.value;
  }
  reset() {
    this.value = 0;
  }
}
