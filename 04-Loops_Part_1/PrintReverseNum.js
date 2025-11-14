const prompt = require("prompt-sync")();

const n = Number(prompt("Enter value of N: "));

function printNaturalNum(n) {
  for (let i = 1; i <= n; i++) {
    process.stdout.write(n - i + 1 + " ");
  }
}

printNaturalNum(n);
