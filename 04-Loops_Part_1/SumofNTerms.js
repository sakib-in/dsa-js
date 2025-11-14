const prompt = require("prompt-sync")();

const n = Number(prompt("Enter value of N: "));

function sumOfNTerms(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

const sum = sumOfNTerms(n);
console.log(`Sum of number 1 to ${n}: ${sum}`);
