// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract MusicalChairs {

  uint blockIndex;
  uint private blockWinner;
  uint public ethPool;
  address payable public winner;
  bool ended;

  event PlayMusic(address player, uint amount);
  event ClaimTreasure(address winner);

  constructor(
        uint _blockIndex
    ) {
        blockIndex = _blockIndex;
    }   

  /// Confirm to press the button.
  function press_button() public payable {
    require(blockIndex > blockWinner, "Music already ended.");

    emit PlayMusic(msg.sender, msg.value);

    blockIndex += 1;
    blockWinner = blockIndex + 2;
    ethPool = ethPool + msg.value;
  }

  function claim_treasure() public returns (bool success) {
    require(blockIndex < blockWinner, "Music not yet ended.");
    require(!ended, "musicEnd has already been called.");

    if (blockIndex == blockWinner) {
      winner = msg.sender;
      emit ClaimTreasure(winner);

      winner.transfer(ethPool);
      ended = true;
      return true;
    }

    return false;
  }
}