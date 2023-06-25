// kiểu dữ liệu nguyên thuỷ:string,number,boolean,null,underfined,

// let arr = ["mùa xuân", "mùa hạ", "mùa thu"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// // }
// let a = "mùa đông ";
// arr.push(a);
// console.log(arr);
// let b = "mùa mưa";
// arr.unshift(b);
// console.log(arr);
// // Update
// // truy cập đến phần tử của mãng và gán lại gía trị cho nó
// arr[2] = "mùa khô";
// console.log(arr);

//Delete
//sử dụng phương thức pop()--tenmang.pop()
//sử dụng phương thức shift()--tenmang.shift()
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);
// ///sử dụng splice()--tenmang.splice(vị trí index,số phần tử,tên cần thêm)
// arr.splice(1, 1);
// console.log(arr);

// arr.splice(2, 1, "mùa mưa");
// let seasons = ["mùa xuân", "mùa hạ", "mùa thu"];
// ///string convert to Array; sử dụng phương thức split("")

// // 1.Phương thức chuyển đổi Array=>String: tenmang.toString()
// let text = seasons.toString();
// console.log(text);

// // 2.Phương thức chuyển đổi Array =>String tenmang.join("thay the dau , va ten phần tử muốn nhập vào")
// let join = seasons.join("-");

// // 3 concat
// let season2 = ["mùa đông"];
// let all = seasons.concat(season2);
// console.log(all);

let a = [1, 2, 3];
let b = [4, 5, 6];
let result = [...a, b]; //tương đương a.push(b)
console.log(result);
let result2 = [...a, ...b];
console.log(result2);
// phân biệt map và forEach
let sum = 0;
for (let i = 0; i < a.length; i++) {
  sum = sum + a[i];
}
console.log(sum);
a.reduce(pre);
