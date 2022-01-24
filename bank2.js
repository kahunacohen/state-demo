

function Bank() {
  const balance = 0;

  return {
    deposit: (n) => {
      return balance + n;
    },
    getBalance: () => balance
  }
}

module.exports = Bank;