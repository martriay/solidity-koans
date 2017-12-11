pragma solidity ^0.4.18;

// A Cup of Tea
//
// Nan-in, a Japanese master during the Meiji era (1868-1912), received a university professor who came to inquire about Zen.
// Nan-in served tea. He poured his visitor's cup full, and then kept on pouring.
// The professor watched the overflow until he no longer could restrain himself. "It is overfull. No more will go in!"
// "Like this cup," Nan-in said, "you are full of your own opinions and speculations. How can I show you Zen unless you first empty your cup?"

contract Cup {
  bool filled;

  // 1. About modifiers
  function isEmpty() fill public returns (bool) {
    return ! filled;
  }

  modifier fill() {
    // ~ no more will go in
    filled = true;

    // The function body is inserted where the special symbol
    // "_;" in the definition of a modifier appears.
    // This means that if the owner calls this function, the
    // function is executed and otherwise, an exception is
    // thrown.
    _;
  }


  // 2. About arguments
  function opinions() holding(true) public returns (bool) {
    return false;
  }

  modifier holding(bool _holding) {
    require(! _holding);
    _;
  }
}
