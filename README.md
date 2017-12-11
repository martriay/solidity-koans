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
A koan is a test written in Javascript which needs to be fixed in order to pass. It lives in the `tests/` folder and may involve contracts from the `contracts/` directory.


### About enlightment

> In test-driven development (TDD) the mantra has always been red: write a failing test and run it, green: make the test pass, and refactor: look at the code and see if you can make it any better.
> With the koans, you will need to run the tests and see it fail (red), make the test pass (green), then take a moment and reflect upon the test to see what it is teaching you and improve the code to better communicate its intent (refactor).

To achieve enlightment you have to run the test, see it fail and then fix the corresponding files.

To run tests we use [`truffle`](https://github.com/trufflesuite/truffle) [`test`](http://truffleframework.com/docs/getting_started/testing):
```
Compiling ./contracts/Cup.sol...
Compiling ./contracts/Migrations.sol...


  Contract: About modifiers
    ✓ Modifiers can be used to easily change the behaviour of functions
    ✓ Modifiers can receive arguments


  2 passing (171ms)
```
> Note: the `npx` command [comes with npm](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) as of npm@5.2.0 version.

## Koans
### About Ethereum
1. About accounts
1. About transactions _(todo)_
1. About gas _(todo)_
1. About data _(todo)_

### About Solidity
1. About contracts _(todo)_
1. About modifiers
1. About events _(todo)_
1. About inheritance _(todo)_
1. About visibility _(todo)_
1. About interfaces _(todo)_
1. About libraries _(todo)_
1. About units _(todo)_
1. About global variables _(todo)_
1. About error handling _(todo)_

### About Security
1. About overflow _(todo)_
1. About reentrancy _(todo)_
1. About gassy arrays _(todo)_
