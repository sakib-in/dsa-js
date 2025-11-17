const prompt = require("prompt-sync")();

const n = Number(prompt("Enter number of rows: "));

function printRightTriangleNumber(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(j + " ");
    }
    console.log();
  }
}

printRightTriangleNumber(n);
