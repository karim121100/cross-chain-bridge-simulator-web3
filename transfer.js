const transfers = [];

function addTransfer(data) {
  transfers.push(data);
}

function getTransfers() {
  return transfers;
}

module.exports = {
  addTransfer,
  getTransfers
};
