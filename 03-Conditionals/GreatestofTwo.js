const prompt = require("prompt-sync")();

const num1 = Number(prompt("Enter 1st number: "));
const num2 = Number(prompt("Enter 2nd number: "));

function findGreatest(a, b) {
  if (a > b) return a;
  else return b;
}

const greater = findGreatest(num1, num2);
console.log(`Greatest is: ${greater}`);
