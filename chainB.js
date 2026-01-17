const balances = {};

function releaseToken(wallet, amount) {
  if (!balances[wallet]) {
    balances[wallet] = 0;
  }
  balances[wallet] += amount;
}

function getBalance(wallet) {
  return balances[wallet] || 0;
}

module.exports = {
  releaseToken,
  getBalance
};
