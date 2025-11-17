const prompt = require("prompt-sync")();

const n = Number(prompt("Enter number of rows: "));

function printRightTriangleAlphabet(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      process.stdout.write(String.fromCharCode(65 + j) + " ");
    }
    console.log();
  }
}

printRightTriangleAlphabet(n);
