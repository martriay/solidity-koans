# Solidity Koans
Inspired by [The Ruby Koans](http://rubykoans.com/), Solidity Koans is an introductory guide to smart contract development in ethereum through testing.
In such a critical task like smart contracts programming, writing tests is a must.

Walk through Solidity's path of enlightment with this koans.

## Installation
### 1. Clone the repo
```
git clone git@github.com:martriay/solidity-koans.git
```

### 2. Install the dependencies
```
npm install
```

## About the koans
> In test-driven development (TDD) the mantra has always been red: write a failing test and run it, green: make the test pass, and refactor: look at the code and see if you can make it any better.

In other words, each koan is a test written in Solidity which needs to be fixed in order to pass.

Due to [truffle](https://github.com/trufflesuite/truffle) [limitations](http://truffleframework.com/docs/getting_started/solidity-tests#test-contract-names), every koan name starts with `Test`.
For example, the `About modifiers` koan consists of the `tests/TestAboutModifiers.sol` test contract.

To achieve enlightment, you have to run the test, see it fail and then fix it.

```
$ npx truffle test test/TestAboutModifiers.sol
Compiling ./contracts/AboutModifiers.sol...
Compiling ./contracts/Migrations.sol...
Compiling ./test/TestAboutModifiers.sol...
Compiling truffle/Assert.sol...


  TestAboutModifiers
    ✓ testAboutModifiers (48ms)
    ✓ testAboutArguments (39ms)


  2 passing (617ms)
```
> Note: the `npx` command [comes with npm](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) as of npm@5.2.0 version.

## Koans
### About Ethereum
* About accounts
* About transactions
* About gas
* About data

### About Solidity
* About contracts
* About types
* About functions
* About modifiers
* About visibility
* About events
* About inheritance
* About interfaces
* About libraries
* About units
* About global variables
* About error handling

### About Security
* About overflow
* About reentrancy
* About gassy arrays