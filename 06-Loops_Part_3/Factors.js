const prompt = require("prompt-sync")();

const num = Number(prompt("Enter a number: "));

function findFactors(n) {
  if (n <= 0 || !Number.isInteger(n)) {
    console.log("Please enter a positive integer.");
    return;
  }

  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      process.stdout.write(i + " ");
    }
  }
  console.log(n);
}

findFactors(num);
