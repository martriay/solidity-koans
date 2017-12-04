pragma solidity ^0.4.18;

import "../contracts/Cup.sol";
import "truffle/Assert.sol";


contract TestAboutModifiers {
  Cup cup = new Cup();

  // 1. About modifiers
  function testAboutModifiers() public {
    bool isEmpty = cup.isEmpty();
    Assert.isTrue(isEmpty, "Modifiers can be used to easily change the behaviour of functions");
  }

  // 2. About arguments
  function testAboutArguments() public {
    bool opinions = cup.holdingOpinions();
    Assert.isFalse(opinions, "Modifiers can receive arguments");
  }
}