// Bài 4

let arr = [2, 2, 3, 2, 4, 2, 2, 4, 1, 5, 1];

let phanTuMAx = null;
let soLanMax = 0;
for (let i = 0; i < arr.length; i++) {
  let dem = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] == arr[i]) {
      dem++;
    }
  }
  if (dem > soLanMax) {
    soLanMax = dem;
    phanTuMax = arr[i];
  }
}
console.log("Phần tử xuất hiện nhiều nhất là: " + phanTuMax);
console.log("Số lần xuất hiện: " + soLanMax);
