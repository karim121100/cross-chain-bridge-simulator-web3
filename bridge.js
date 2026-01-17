const { lockToken } = require("./chainA");
const { releaseToken } = require("./chainB");
const { addTransfer } = require("./transfer");
const { isValidWallet } = require("./wallet");

function bridgeToken(wallet, amount) {
  if (!isValidWallet(wallet)) {
    return false;
  }

  lockToken(wallet, amount);
  releaseToken(wallet, amount);

  addTransfer({
    wallet: wallet,
    amount: amount,
    time: new Date().toISOString()
  });

  return true;
}

module.exports = {
  bridgeToken
};
