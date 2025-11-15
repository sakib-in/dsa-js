const prompt = require("prompt-sync")();

const num = Number(prompt("Enter a number: "));

function checkPrime(n) {
  if (n < 2) return "Not a Prime number";
  for (let i = 2; i < n / 2; i++) {
    if (n % 2 === 0) return "Not a Prime number";
  }
  return "Prime number";
}

console.log(checkPrime(num));
