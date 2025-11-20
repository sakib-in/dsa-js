// Array Right Rotation by 1

const prompt = require("prompt-sync")();

const l = Number(prompt("Enter length of Array: "));

const arr = [];
for (let i = 1; i <= l; i++) {
  arr.push(Number(prompt(`Enter ${i} element: `)));
}

function rightRotationby1(arr) {
  const temp = arr[arr.length - 1];

  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = temp;

  return arr;
}

const getNewArr = rightRotationby1(arr);
console.log(`Array after right rotation by 1 = ${getNewArr.join(" ")}`);
