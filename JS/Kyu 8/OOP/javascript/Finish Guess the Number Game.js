///////////////////////////////////////////////////////////////////////////////////
// Finish Guess the Number Game
///////////////////////////////////////////////////////////////////////////////////

// Imagine you are creating a game where the user has to guess the correct number. But there is a limit of how many guesses the user can do.

//     If the user tries to guess more than the limit, the function should throw an error.
//     If the user guess is right it should return true.
//     If the user guess is wrong it should return false and lose a life.

// Can you finish the game so all the rules are met?

// ___________________________________________________________________;

//
class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }

  guess(n) {
    if (!this.lives) throw Error;
    this.lives--;
    // Boolean shorthand ternary, return true if matches or false if not
    return n === this.number;
  }
}

//
class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  guess(n) {
    if (this.lives <= 0) {
      throw new Error(" No lives left");
    }
    if (this.number == n) {
      return true;
    } else {
      this.lives -= 1;
      return false;
    }
  }
}
