const prompt = require("prompt-sync")();

const l = Number(prompt("Enter length of Array: "));

const arr = [];
for (let i = 1; i <= l; i++) {
  arr.push(Number(prompt(`Enter ${i} element: `)));
}

function findGreatestElement(arr) {
  let max = Math.max(arr[0], arr[1]);
  let secMax = Math.min(arr[0], arr[1]);
  let index = 0;

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max) {
      secMax = max;
      max = arr[i];
    } else if (arr[i] > secMax && arr[i] != max) {
      secMax = arr[i];
    }
  }
  return secMax;
}

const getSecMax = findGreatestElement(arr);
console.log(`Second greatest element = ${getSecMax} `);
