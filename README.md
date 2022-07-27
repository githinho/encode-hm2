# Homework 2 for Encode Expert Solidity Bootcamp [![Github Actions][gha-badge]][gha] [![Hardhat][hardhat-badge]][hardhat] [![License: MIT][license-badge]][license]

[gha]: https://github.com/githinho/encode-hm2/actions
[gha-badge]: https://github.com/githinho/encode-hm2/actions/workflows/ci.yml/badge.svg
[hardhat]: https://hardhat.org/
[hardhat-badge]: https://img.shields.io/badge/Built%20with-Hardhat-FFDB1C.svg
[license]: https://opensource.org/licenses/MIT
[license-badge]: https://img.shields.io/badge/License-MIT-blue.svg

## Intro

This repo is part of the Homework 2 for Encode Expert Solidity Bootcamp.
Tasks:

- Start a new project using the [`Hardhat template`](https://github.com/paulrberg/hardhat-template/).
- Make a fork of mainnet from the command line. First set `ALYCHEMY_API_KEY` in `.env`, if missing copy from `.env.example`, and run:

```sh
yarn hhnode
```

- Query the mainnet using the command line to retrieve a property such as latest block number.
  After forking the mainnet run:

```sh
$ yarn ethers
unknown> provider.getBlockNumber()
# should output 15223963
```

- Write a function that will delete items (one at a time) from a dynamic array without leaving gaps in the array.
  You should assume that the items to be deleted are chosen at random, and try to do this in a gas efficient manner.
  For example imagine your array has 12 items and you need to delete the items at indexes 8, 2 and 7.
  The final array will then have items {0,1,3,4,5,6,9,10,11}.

  For solution see contract [Array.sol](contracts/Array.sol) and function `removeIndexes`.

## Features

This template builds upon the frameworks and libraries mentioned above, so for details about their specific features, please consult their respective documentations.

For example, for Hardhat, you can refer to the [Hardhat Tutorial](https://hardhat.org/tutorial) and the [Hardhat
Docs](https://hardhat.org/docs). You might be in particular interested in reading the [Testing Contracts](https://hardhat.org/tutorial/testing-contracts) section.

### GitHub Actions

This template comes with GitHub Actions pre-configured. Your contracts will be linted and tested on every push and pull
request made to the `main` branch.

Note though that to make this work, you must se your `INFURA_API_KEY` and your `MNEMONIC` as GitHub secrets.

You can edit the CI script in [.github/workflows/ci.yml](./.github/workflows/ci.yml).

### Conventional Commits

This template enforces the [Conventional Commits](https://www.conventionalcommits.org/) standard for git commit messages.
This is a lightweight convention that creates an explicit commit history, which makes it easier to write automated
tools on top of.

### Git Hooks

This template uses [Husky](https://github.com/typicode/husky) to run automated checks on commit messages, and [Lint Staged](https://github.com/okonet/lint-staged) to automatically format the code with Prettier when making a git commit.

## Usage

### Pre Requisites

Before being able to run any command, you need to create a `.env` file and set a BIP-39 compatible mnemonic as an environment
variable. You can follow the example in `.env.example`. If you don't already have a mnemonic, you can use this [website](https://iancoleman.io/bip39/) to generate one.

Then, proceed with installing dependencies:

```sh
$ yarn install
```

### Compile

Compile the smart contracts with Hardhat:

```sh
$ yarn compile
```

### TypeChain

Compile the smart contracts and generate TypeChain bindings:

```sh
$ yarn typechain
```

### Test

Run the tests with Hardhat:

```sh
$ yarn test
```

### Lint Solidity

Lint the Solidity code:

```sh
$ yarn lint:sol
```

### Lint TypeScript

Lint the TypeScript code:

```sh
$ yarn lint:ts
```

### Coverage

Generate the code coverage report:

```sh
$ yarn coverage
```

### Report Gas

See the gas usage per unit test and average gas per method call:

```sh
$ REPORT_GAS=true yarn test
```

### Clean

Delete the smart contract artifacts, the coverage reports and the Hardhat cache:

```sh
$ yarn clean
```

### Deploy

Deploy the contracts to Hardhat Network:

```sh
$ yarn deploy --greeting "Bonjour, le monde!"
```

## License

[MIT](./LICENSE.md)
