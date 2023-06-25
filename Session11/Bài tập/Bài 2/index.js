let input = prompt("nhập vào");
let numberArr = input.split(",");
let numbers = [];
for (let i = 0; i < numberArr.length; i++) {
  numbers.push(Number(numberArr[i]));
}
console.log(numbers);
let maxNumber = numbers[0];
let minNumber = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maxNumber) {
    maxNumber = numbers[i];
  }
  if (numbers[i] < minNumber) {
    minNumber = numbers[i];
  }
}
console.log("lớn nhất là: " + maxNumber);
console.log("nhỏ nhất là: " + minNumber);
