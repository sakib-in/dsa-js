const prompt = require("prompt-sync")();

const n = Number(prompt("Enter number of rows: "));

function printAlternatingBinaryTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str = str + (i % 2 === 1 ? j % 2 : (j + 1) % 2);
    }
    console.log(str);
  }
}

printAlternatingBinaryTriangle(n);
