const prompt = require("prompt-sync")();

const n = Number(prompt("Enter number of rows: "));

function printInvertedRightTriangle(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = n; j >= i; j--) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

printInvertedRightTriangle(n);
