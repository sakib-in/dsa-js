const prompt = require("prompt-sync")();

const name = prompt("Enter your name: ");
const age = Number(prompt("Enter your age: "));

function greet(name, age) {
  console.log(`Hello ${name} you are ${age} years old.`);
}

greet(name, age);
