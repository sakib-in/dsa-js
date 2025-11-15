const prompt = require("prompt-sync")();

const num = Number(prompt("Enter a number: "));

function fibonacciSeries(n) {
  let a = 0,
    b = 1;

  for (let i = 0; i < n; i++) {
    process.stdout.write(a + " ");
    let c = a + b;
    a = b;
    b = c;
  }
}

fibonacciSeries(num);
