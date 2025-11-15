const prompt = require("prompt-sync")();

const month = prompt("Enter month: ");
const year = Number(prompt("Enter the year: "));

function checkLeapYear(y) {
  return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
}

function findNumOfDays(m, y) {
  let days;
  const isLeapYear = checkLeapYear(y);

  if (
    m.includes("jan") ||
    m.includes("mar") ||
    m.includes("may") ||
    m.includes("jul") ||
    m.includes("aug") ||
    m.includes("oct") ||
    m.includes("dec")
  ) {
    days = 31;
    console.log(`${days} Days`);
  } else if (
    m.includes("apr") ||
    m.includes("jun") ||
    m.includes("sep") ||
    m.includes("nov")
  ) {
    days = 30;
    console.log(`${days} Days`);
  } else if (m.includes("feb")) {
    days = isLeapYear ? 29 : 28;
    console.log(`${days} Days`);
  } else {
    console.log(`Something went wrong — try again!`);
  }
}

findNumOfDays(month.toLowerCase(), year);
