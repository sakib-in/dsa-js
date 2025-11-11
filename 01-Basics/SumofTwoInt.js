const prompt = require("prompt-sync")();

const num1 = Number(prompt("Enter 1st number: "));
const num2 = Number(prompt("Enter 2nd number: "));

function sum() {
  console.log(`Sum of ${num1} and ${num2} is: ${num1 + num2}`);
}

sum(num1, num2);
