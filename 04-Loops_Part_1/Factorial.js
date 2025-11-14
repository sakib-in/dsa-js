const prompt = require("prompt-sync")();

const n = Number(prompt("Enter value of N: "));

function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

const fact = factorial(n);
console.log(`Factorial of ${n}: ${fact}`);
