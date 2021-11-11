# Sample

This repository includes a complete project structure for AssemblyScript contracts targeting the NEAR platform.

```txt
There are 2 "styles" of implementing AssemblyScript NEAR contracts: 
- the contract interface can either be a collection of exported functions 
- or the contract interface can be the methods of a an exported class

We call the second style "Singleton" because there is only one instance of the class which is serialized to the blockchain storage.  Rust contracts written for NEAR do this by default with the contract struct.
```

Check out the follwoing videos explaining this CandyShop smart contract:

[1. NEAR-CandyShop: Intro](https://www.loom.com/share/5c8b76ea22c04c2793cfa264f81b1393?sharedAppSource=personal_library)

[2. NEAR-CandyShop: updateCandyShop](https://www.loom.com/share/7afbefe10b0548159bf89333c553d65e?sharedAppSource=personal_library)

[3. NEAR-CandyShop: getcandyItem](https://www.loom.com/share/cff0a31b7b48449a8628fd3d1cda00cd?sharedAppSource=personal_library)

[4. NEAR-CandyShop: deleteCandyItem](https://www.loom.com/share/49a7a736bd6b42898294c71371c5a20a?sharedAppSource=personal_library)

[5. NEAR-CandyShop: getCandyShop](https://www.loom.com/share/978d8e321bfc42a9a571c3371f16a8a7?sharedAppSource=personal_library)

[6. NEAR-CandyShop: Wrap-Up!](https://www.loom.com/share/7500b495c4d645be8ec0af84f24a7890?sharedAppSource=personal_library)

The example here is very basic.  It's a simple contract demonstrating the following concepts:
- a single contract
- the difference between `view` vs. `change` methods
- basic contract storage

The goal of this repository is to make it as easy as possible to get started writing unit tests for AssemblyScript contracts built to work with NEAR Protocol.

## Usage

### Getting started

1. clone this repo to a local folder
2. run `yarn`
3. run `yarn install`
4. run `yarn test`

### Top-level `yarn` commands

- run `yarn test` to run all tests
  - (!) be sure to run `yarn build:release` at least once before:
    - run `yarn test:unit` to run only unit tests
- run `yarn build` to quickly verify build status
- run `yarn deploy` to quickly run the `./scripts/1.deploy.sh` command to deploy smart contract
- run `yarn clean` to clean up build folder

### Other documentation

- candyShop contract and test documentation
  - see `/src/candyShop/README` for contract interface
  - see `/src/candyShop/__tests__/README` for candyShop unit testing details


### Contracts and Unit Tests

```txt
src
├── candyShop                        <-- candyShop contract
│   ├── README.md
│   ├── __tests__
│   │   ├── README.md
│   │   └── index.unit.spec.ts
│   └── assembly
│       └── index.ts
|       └── model.ts
└── utils.ts                      <-- shared contract code
```

### Helper Scripts

```txt
scripts
├── 1.deploy.sh
├── 2.update_candy_shop.sh
├── 3.get_candy_item.sh
├── 4.get_candy_shop.sh
├── 5.delete_candy_item.sh
└── README.md                     <-- instructions
```
## Deployed Contract Link
[Check out the deployed Smart Contract on explorer.testnet.near.org](https://explorer.testnet.near.org/transactions/GUP4qaUYk555nJqkUsvqudMz4FLTqMArwCu59d2tMbYY)