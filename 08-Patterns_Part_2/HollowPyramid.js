const prompt = require("prompt-sync")();

const n = Number(prompt("Enter number of rows: "));

function printHollowPyramid(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 2 * n - 1; j++) {
      if (i +j === n + 1 || j - i === n - 1 || i === n) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log();
  }
}

printHollowPyramid(n);
