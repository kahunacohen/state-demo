class Owner {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
}
class Transaction {
  constructor(date, amount) {
    this.date = date;
    this.amount = amount;
  }
}
class BankAccount {
  constructor(owners) {
    this.owners = owners;
    this.balance = 0;
    this.transactions = [];
  }
  getBalance() {
    return this.balance;
  }
  deposit(n) {
    this.balance += n;
    this.transactions.push(new Transaction(new Date(), n));
  }
  withdrawal(n) {
    this.balance -= n;
    this.transactions.push(new Transaction(new Date(), -n));
  }
  getTransactions() {
    return this.transactions;
  }
  mergeAccount(account) {
    const otherBalance = account.getBalance();
    this.deposit(otherBalance);
    account.withdrawal(otherBalance);
  
  }
  changeOwnerName(i, newName) {
    this.owners[i].setName(newName);
  }
}


// class Flock {
//   constructor(n) {
//     this.seagulls = n;
//   }

//   conjoin(other) {
//     this.seagulls += other.seagulls;
//     return this;
//   }

//   breed(other) {
//     this.seagulls = this.seagulls * other.seagulls;
//     return this;
//   }
// }

// const flockA = new Flock(4);
// const flockB = new Flock(2);
// const flockC = new Flock(0);
// const result = flockA
//   .conjoin(flockC) // 4
//   .breed(flockB) // 8
//   .conjoin(flockA.breed(flockB)) //32
//   .seagulls;
// console.log(result)
// // 32

module.exports = {BankAccount, Owner}

