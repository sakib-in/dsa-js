const prompt = require("prompt-sync")();

const n = Number(prompt("Enter number of rows: "));

function printRhombus(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      process.stdout.write(" ");
    }

    for (let j = 1; j <= n; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
}

printRhombus(n);
