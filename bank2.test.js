const Bank = require("./bank2");

test("works", () => {
  const {deposit, getBalance} = Bank();
  expect(getBalance()).toEqual(0);
  deposit(100);
  expect(getBalance()).toEqual(100);
});