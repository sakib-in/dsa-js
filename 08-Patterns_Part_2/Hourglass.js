const prompt = require("prompt-sync")();

const n = Number(prompt("Enter number of rows: "));

function printHourglass(n) {
  for (let i = 1; i <= 2 * n - 1; i++) {
    for (let j = 1; j <= 2 * n - 1; j++) {
      if (i === 1 || j + i === 2 * n || i === j || i === 2 * n - 1) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log();
  }
}

printHourglass(n);
