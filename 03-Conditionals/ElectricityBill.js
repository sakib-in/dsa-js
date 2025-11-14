const prompt = require("prompt-sync")();

const units = Number(
  prompt("Enter the number of electricity units consumed: ")
);

function calculateElectricityBill(units) {
  let payableAmount = 0;

  if (units <= 100) payableAmount = units * 4.2;
  else if (units <= 200) payableAmount = 100 * 4.2 + (units - 100) * 6;
  else if (units <= 400)
    payableAmount = 100 * 4.2 + 100 * 6 + (units - 200) * 8;
  else payableAmount = 100 * 4.2 + 100 * 6 + 200 * 8 + (units - 400) * 13;

  return payableAmount;
}

const bill = calculateElectricityBill(units);
console.log(`Electricity Bill: ₹${bill.toFixed(2)}`);
