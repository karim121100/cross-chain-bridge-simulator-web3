const { bridgeToken } = require("./bridge");
const { getTransfers } = require("./transfer");
const { logInfo } = require("./logger");

const userWallet = "0xUserWalletHere";

function startApp() {
  logInfo("Starting Cross-Chain Bridge Simulator");

  bridgeToken(userWallet, 50);

  const history = getTransfers();
  logInfo("Bridge History:");
  console.log(history);
}

startApp();
