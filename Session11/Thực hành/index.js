//Bài 1
let array = ["Hello", "Rikkei", "Academy"];
console.log(array.join(" "));
//Bài 2
let array1 = array.reverse();
console.log("array1", array1);
console.log(array1.join(" "));

// Bài 3
// cách 1
let array3 = ["Hello", "World", "Rikkei", "Academy"];
array3.splice(1, 1); // tác động lên mảng cũ
console.log(array3.join(" "));
// cách 2: slice() // trả về mảng mới đã được cắt ko thay đổi lên mảng cũ
array3 = ["Hello", "World", "Rikkei", "Academy"];
array3.slice()[("Hello", "World", "Rikkei", "Academy")];
/// 0   ,  1      ,   2     ,  3
let array4 = array3.slice(0, 1);
console.log(array3.slice(0, 1));
let array5 = array3.slice(2);
console.log(array3.slice(2));
console.log(array3);
console.log(array4.concat(array5));
//Bài 4
let listNumber = [2, 3, 5, 6, 7];
let sum = 0;
for (let i = 0; i < listNumber.length; i++) {
  // i = 0
  //sum = 0
  sum = listNumber[i] + sum;
}
let sum1 = 100;
for (let i = 0; i < listNumber.length; i++) {
  console.log(listNumber[i]);
  //sum1 = listNumber[i] + sum1;
  sum1 = sum1 - listNumber[i];
}
console.log("biến tổng lần 2:", sum1);

for (let i = 0; i < listNumber.length; i++) {
  if (listNumber[i] % 2 == 0) {
    console.log(listNumber[i], "chia hết cho 2");
  }
}
