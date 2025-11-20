// Copy Array and Reverse

const prompt = require("prompt-sync")();

const l = Number(prompt("Enter length of Array: "));

const arr = [];
for (let i = 1; i <= l; i++) {
  arr.push(Number(prompt(`Enter ${i} element: `)));
}

function reverseArr(arr) {
  let temp = new Array(arr.length);
  let i = arr.length - 1;
  for (let j = 0; j < arr.length; j++) {
    temp[j] = arr[i];
    i--;
  }

  return temp;
}

const getNewArr = reverseArr(arr);
console.log(`Reversed Array: ${getNewArr.join(" ")}`);
