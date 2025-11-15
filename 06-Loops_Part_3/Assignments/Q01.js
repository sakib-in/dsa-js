const prompt = require("prompt-sync")();

const num = prompt("Enter a 10 digit number: ");

function checkISBNNum(num) {
  const numSize = num.length;

  if (numSize !== 10) {
    return console.log("Invalid Input - Try Again!");
  }

  let sumOfDigit = 0;
  for (let i = 0; i < numSize; i++) {
    const digit = Number(num[i]);
    if (isNaN(digit)) {
      console.log("Invalid Input - Only digits allowed!");
      return;
    }
    sumOfDigit += digit * (10 - i);
  }

  if (sumOfDigit % 11 === 0) {
    console.log("Valid ISBN");
  } else {
    console.log("Invalid ISBN");
  }
}

checkISBNNum(num);
