const prompt = require("prompt-sync")();

const amount = Number(prompt("Enter an amount in Rupess: "));

function denominationFinder(amount) {
  let remaining = amount;
  const notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
  const result = [];

  for (let note of notes) {
    const count = Math.floor(remaining / note);
    if (count > 0) {
      result.push(`${note} -> ${count}`);
      remaining %= note;
    }
  }
  console.log(`\nDenominations for ₹${amount}:\n`);
  console.log(result.join("\n"));
}

denominationFinder(amount);
