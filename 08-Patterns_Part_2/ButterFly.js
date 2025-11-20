const prompt = require("prompt-sync")();

const n = Number(prompt("Enter number of rows: "));

function printButterfly(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (j === 1 || j === n || i === j || i + j === n + 1) {
        process.stdout.write("* ");
      } else {
        process.stdout.write("  ");
      }
    }
    console.log();
  }
}

printButterfly(n);
