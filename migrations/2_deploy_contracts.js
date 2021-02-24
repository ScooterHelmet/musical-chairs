var MusicalChairs = artifacts.require("./MusicalChairs.sol");
const genesisBlock = 0;

module.exports = function (deployer) {
  deployer.deploy(MusicalChairs, genesisBlock)
  .then((res) => {
    return console.log(res);
  });
};
