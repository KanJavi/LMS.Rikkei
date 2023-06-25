// Bài 3.

let input = prompt("Nhập vào chuỗi số ");
let numberArr = input.split(",");
// Sử dụng hàm Sort
numberArr.sort(function (a, b) {
  return a - b;
});
console.log(`Dãy số nhập theo chiều tăng dần ${numberArr}`);
// Không sử dụng hàm Sort
let numbers = [];
for (let i = 0; i < numberArr.length; i++) {
  numbers.push(Number(numberArr[i]));
}
for (let i = 0; i < numbers.length - 1; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[i] > numbers[j]) {
      let temp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = temp;
    }
  }
}
console.log(`Dãy số sau khi sắp xếp lại ${numbers}`);
