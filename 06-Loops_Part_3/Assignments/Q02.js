const prompt = require("prompt-sync")();

const num1 = Number(prompt("Enter 1st number: "));
const num2 = Number(prompt("Enter 2nd number: "));

const min = Math.min(num1, num2);
const max = Math.max(num1, num2);

function findHCF(min, max) {
  let a = min,
    b = max;

  while (b !== 0) {
    let rem = a % b;
    a = b;
    b = rem;
  }

  console.log(a);
}

findHCF(min, max);
