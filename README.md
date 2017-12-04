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

## About koans
> In test-driven development (TDD) the mantra has always been red: write a failing test and run it, green: make the test pass, and refactor: look at the code and see if you can make it any better.

In other words, each koan is a test written in Solidity which needs to be fixed in order to pass.

Every koan consists of a test contract living in the `tests/` folder, named after the koan and starting with `Test`.
For example, the `About modifiers` koan consists of the `tests/TestAboutModifiers.sol` test contract.

To achieve enlightment you have to run the test, see it fail and then fix the corresponding files in the `contracts/` directory.

To run a test contract use [`truffle`](https://github.com/trufflesuite/truffle) [`test`](http://truffleframework.com/docs/getting_started/solidity-tests)

```
$ npx truffle test test/TestAboutModifiers.sol
Compiling ./contracts/Cup.sol...
Compiling ./contracts/Migrations.sol...
Compiling ./test/TestAboutModifiers.sol...
Compiling truffle/Assert.sol...


  TestAboutModifiers
    ✓ testAboutModifiers (52ms)
    ✓ testAboutArguments (54ms)


  2 passing (631ms)
```
> Note: the `npx` command [comes with npm](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) as of npm@5.2.0 version.

## Koans
### About Ethereum
* About accounts _(todo)_
* About transactions _(todo)_
* About gas _(todo)_
* About data _(todo)_

### About Solidity
* About contracts _(todo)_
* About types _(todo)_
* About functions _(todo)_
* About modifiers
* About visibility _(todo)_
* About events _(todo)_
* About inheritance _(todo)_
* About interfaces _(todo)_
* About libraries _(todo)_
* About units _(todo)_
* About global variables _(todo)_
* About error handling _(todo)_

### About Security
* About overflow _(todo)_
* About reentrancy _(todo)_
* About gassy arrays _(todo)_