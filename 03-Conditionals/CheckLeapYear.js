const prompt = require("prompt-sync")();

const year = Number(prompt("Enter a year: "));

function checkLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) return true;
  else return false;
}

const isLeapYear = checkLeapYear(year);
if (isLeapYear) console.log(`${year} is a Leap Year`);
else console.log(`${year} is not a Leap Year`);
