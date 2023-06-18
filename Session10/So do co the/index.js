let height = parseInt(prompt("nhập vào chiều cao"));
let weight = parseInt(prompt("nhập vào cân nặng"));
let bmi = weight / (height * height);
if (bmi < 18) {
  document.write("Cân nặng thấp");
} else if (24 < bmi && bmi < 18) {
  document.write("Bình thường");
} else if (bmi === 25) {
  document.write("Thừa cân");
} else {
  document.write("Béo phì");
}
