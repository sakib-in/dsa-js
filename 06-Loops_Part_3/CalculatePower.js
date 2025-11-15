const prompt = require("prompt-sync")();

const a = Number(prompt("Enter number a: "));
const b = Number(prompt("Enter number b: "));

function calculatePower(a, b) {
  if (a === 0 || b === 0) return "Invalid Inputs - Try Again!";

  let result = 1;
  for (let i = 1; i <= Math.abs(b); i++) {
    result *= a;
  }

  return result;
}

const power = calculatePower(a, b);
console.log(power);
