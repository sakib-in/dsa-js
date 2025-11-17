const prompt = require("prompt-sync")();

const n = Number(prompt("Enter number of rows: "));

function printDiamond(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let s = 1; s <= n - i; s++) {
      str += " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
      str += "*";
    }
    console.log(str);
  }

  for (let i = n - 1; i >= 1; i--) {
    let str = "";
    for (let s = 1; s <= n - i; s++) {
      str += " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
      str += "*";
    }
    console.log(str);
  }
}

printDiamond(n);
