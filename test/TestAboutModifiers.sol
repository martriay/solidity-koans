pragma solidity ^0.4.18;

import "truffle/Assert.sol";
import "../contracts/AboutModifiers.sol";

// 1.   A Cup of Tea

// Nan-in, a Japanese master during the Meiji era (1868-1912), received a university professor who came to inquire about Zen.
// Nan-in served tea. He poured his visitor's cup full, and then kept on pouring.
// The professor watched the overflow until he no longer could restrain himself. "It is overfull. No more will go in!"
// "Like this cup," Nan-in said, "you are full of your own opinions and speculations. How can I show you Zen unless you first empty your cup?"

contract TestAboutModifiers {

  // About Modifiers
  function testAboutModifiers() fullCup public {
    Assert.isTrue(true, "Modifiers can be used to easily change the behaviour of functions");
  }

  modifier fullCup() {
    // The function body is inserted where the special symbol
    // "_;" in the definition of a modifier appears.
    // This means that if the owner calls this function, the
    // function is executed and otherwise, an exception is
    // thrown.

    // ~ no more will go in
    // _;
  }


  // About arguments
  function testAboutArguments() opinions(true) public {
    Assert.isTrue(true, "Modifiers can receive arguments");
  }

  modifier opinions(bool holding) {
    require(! holding);
    _;
  }

}