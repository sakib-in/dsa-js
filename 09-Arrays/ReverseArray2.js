// Array Reverse Without Using Extra Space

const prompt = require("prompt-sync")();

const l = Number(prompt("Enter length of Array: "));

const arr = [];
for (let i = 1; i <= l; i++) {
  arr.push(Number(prompt(`Enter ${i} element: `)));
}

function reverseArr(arr) {
  let i = 0,
    j = arr.length - 1;

  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }

  return arr;
}

const getNewArr = reverseArr(arr);
console.log(`Reversed Array: ${getNewArr.join(" ")}`);
