const prompt = require("prompt-sync")();

const n = Number(prompt("Enter number of rows: "));

function printMirroredRightTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let s = 1; s <= n - i; s++) {
      str += " ";
    }

    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    console.log(str);
  }
}

printMirroredRightTriangle(n);
