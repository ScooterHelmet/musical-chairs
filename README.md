# [ECO](https://eco.com/) – Smart Contract Engineer assessment

### Context 
- https://github.com/ScooterHelmet/musical-chairs/blob/master/Eco_Take_Home_Exercise.pdf

### My assumptions for this assessment
- OpenZeppelin "know-how" is trivial here
- Project is to use Truffle, not either of the embark, hardhat, or 0xcert frameworks
- Heavy on unit testing and solidity
- contract may or may not be called by another smart contract
- press_button() and claim_treasure() are the only two functions
- press-button() and claim_treasure() are separate functions and do not nest under either
- no need to account for time
- unit of measurement is `block.number`
- test scenario is "happy path"

## This project assumes:

- npm install is successful
- truffle is globally installed
- truffle-config.js is correctly configured (i.e. port, network_id, from '0x00...')

## Commands used:
```sh
truffle init

npm init

npm i mocha chai ethers ethereum-waffle @types/mocha @types/chai -D

touch waffle.json

touch 2_deploy_contracts.js

touch MusicalChairs.sol

touch MusicalChairs.test.ts

npm run build

npm run compile

npm run migrate

npm run test

```

## Resources visited/used:
https://docs.soliditylang.org/en/v0.4.21/units-and-global-variables.html
https://ethereum.stackexchange.com/questions/82038/how-can-i-measure-the-gas-used-in-a-block-of-code
https://ethereum.stackexchange.com/questions/18576/how-time-difference-can-be-calculated-by-block-number-and-how-it-is-different-fr
https://docs.soliditylang.org/en/latest/solidity-by-example.html#simple-open-auction
https://ethereumbuilders.gitbooks.io/guide/content/en/solidity_features.html
https://ethereum.org/en/developers/docs/smart-contracts/testing/
https://remix-ide.readthedocs.io/en/latest/unittesting.html#customization
https://ethereum-waffle.readthedocs.io/en/latest/
https://ethereum-waffle.readthedocs.io/en/latest/compilation.html
https://devhints.io/chai


Note: 

I have not experienced mentorship with unit test setups in truffle, this impacted my unit testing approach by adopting and incorporating waffle in the assessment

I read on waffle vs remix IDE for unit testing, the more I read, the more I leaned on waffle as the correct tool to work with truffle

My unit tests reflect my chronological approach taken from "top to bottom" for one test scenario

I believe test coverage has some correlation to test senarios–I stuck with the default context, to assume "happy path" test scenario
