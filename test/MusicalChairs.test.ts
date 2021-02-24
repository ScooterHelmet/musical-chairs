					

import {use, expect} from 'chai';
import {Contract} from 'ethers';
import {deployContract, MockProvider, solidity} from 'ethereum-waffle';
import MusicalChairs from '../build/contracts/MusicalChairs.json';

use(solidity);

let blockIndex = 0;
let blockWinner = 0;
let ethPool = 0;
let winner = ``;
let ended = false;

const falseString = "False";
const trueString = "True";

describe('MusicalChairs', () => {
  const [wallet, walletTo] = new MockProvider().getWallets();
  let transaction: Contract;

  beforeEach(async () => {
    transaction = await deployContract(wallet, MusicalChairs, [1000]);
  });

  it('Assigns initial balance', async () => {
    expect(await transaction.balanceOf(wallet.address)).to.equal(1000);
  });

  it('Calls press_button(), transfers amount to contract', async () => {
    await transaction.transfer(wallet.address, 7);
    expect(await transaction.balanceOf(walletTo.address)).to.equal(7);
  });

  it('Transfer PlayMusic emit event', async () => {
    await expect(transaction.transfer(walletTo.address, 7))
      .to.emit(transaction, 'PlayMusic')
      .withArgs(wallet.address, 7);

      ++blockIndex;
      blockWinner = blockIndex + 3;
      ethPool = ethPool + 7;
  });

  it('Calls claim_treasure(), expects false on MusicalChairs contract', async () => {
    await transaction.claim_transaction();
    expect('ClaimTreasure').to.be.calledOnContract(transaction);
    expect('ClaimTreasure').is.false("false", falseString);

    ++blockIndex;
  });

  it('Calls claim_treasure(), expects true on MusicalChairs contract', async () => {
    await transaction.claim_transaction();
    expect('ClaimTreasure').to.be.calledOnContract(transaction);
    expect('ClaimTreasure').is.true("true", trueString );

    ++blockIndex;
    if (blockIndex == blockWinner) {
      ended = true;
    }

  });

  it('Transfer ClaimTreasure emit event', async () => {
    await expect(transaction.transfer(wallet.address, ethPool))
      .to.emit(transaction, 'ClaimTreasure')
      .withArgs(walletTo.address);

      winner = wallet.address;
      ended = true;
  });

  it('Calls claim_treasure(), throws error on MusicalChairs contract', async () => {
    await transaction.claim_transaction();
    expect('ClaimTreasure').to.be.calledOnContract(transaction);
    expect('ClaimTreasure').is.undefined("Error");

    console.log(ended);
  });

  it('Calls balanceOf winner address on MusicalChairs contract', async () => {
    await transaction.balanceOf(winner);
    expect('balanceOf').to.be.calledOnContractWith(transaction, [winner]);
    console.log(winner);
  });

});