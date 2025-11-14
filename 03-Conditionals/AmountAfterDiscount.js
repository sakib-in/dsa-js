const prompt = require("prompt-sync")();

const price = Number(prompt("Enter price of Product: "));

function calculateFinalAmount(price) {
  let discount = 0;
  if (price <= 5000) discount = 0;
  if (price > 5000 && price <= 7000) discount = 5;
  if (price > 7000 && price <= 9000) discount = 10;
  if (price > 9000) discount = 20;

  return price - (price * discount) / 100;
}

const finalAmount = calculateFinalAmount(price);
console.log(`Final Amount: ${Math.floor(finalAmount)}`);
