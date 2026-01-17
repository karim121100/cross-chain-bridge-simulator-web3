function isValidWallet(address) {
  return address && address.startsWith("0x");
}

module.exports = {
  isValidWallet
};
