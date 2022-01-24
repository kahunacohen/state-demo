const {BankAccount, Owner} = require("./bank");

test("transactions", () => {
  const account = new BankAccount([new Owner("a")]);
  expect(account.getBalance()).toEqual(0);
  account.deposit(1000);
  account.withdrawal(100);
  const transactions = account.getTransactions();
  const balanceFromTransactions = transactions.reduce((acc, curr) => acc += curr.amount, 0);
  expect(transactions.length).toEqual(2);
  expect(account.getBalance()).toEqual(balanceFromTransactions);
});
test("mergeAccount", () => {
  const account1 = new BankAccount([new Owner("a")]);
  account1.deposit(100);
  account2 = new BankAccount([new Owner("b")]);
  account2.deposit(200);
  account2.mergeAccount(account1);
  expect(account1.getBalance(0));
  expect(account2.getBalance(300));
});
test("changeOwnerName", () => {
  const account = new BankAccount([new Owner("a")]);
  expect(account.owners[0].getName()).toEqual("a");
  account.changeOwnerName(0, "b");
  expect(account.owners[0].getName()).toEqual("b");
});