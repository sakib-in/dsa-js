// Array Left Rotation by 1

const prompt = require("prompt-sync")();

const l = Number(prompt("Enter length of Array: "));

const arr = [];
for (let i = 1; i <= l; i++) {
  arr.push(Number(prompt(`Enter ${i} element: `)));
}

function leftRotationby1(arr) {
  const temp = arr[0];

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = temp;

  return arr;
}

const getNewArr = leftRotationby1(arr);
console.log(`Array after left rotation by 1 = ${getNewArr.join(" ")}`);
