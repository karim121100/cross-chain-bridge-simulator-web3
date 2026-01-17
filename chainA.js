const locked = {};

function lockToken(wallet, amount) {
  if (!locked[wallet]) {
    locked[wallet] = 0;
  }
  locked[wallet] += amount;
}

function getLocked(wallet) {
  return locked[wallet] || 0;
}

module.exports = {
  lockToken,
  getLocked
};
