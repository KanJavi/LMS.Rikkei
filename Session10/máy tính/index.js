let button1 = document.querySelector("#one");
button1.addEventListener("click", function () {
  let giatri1 = button1.innerText; // lấy giá trị của ô button
  console.log(giatri1);
  let input1 = document.querySelector("input"); // lấy giá trị của ô input
  input1.value = input1.value + giatri1; // += giatri1 // cập nhận giá trị mới cho ô input
  // muốn cập nhật lại giá trị hiện tại của ô input: theInput.value += giá trị mới
  console.log("giá trị ô input", input1.value);
});
let button2 = document.querySelector("#two");
button2.addEventListener("click", function () {
  let giatri2 = button2.innerText; // giá trị của ô button
  let input2 = document.querySelector("input");
  //cập nhận thằng nào thì bằng chính nó + thằng mới
  // thằng cũ = thằng cũ + thằng mới
  input2.value = input2.value + giatri2;
});
let button3 = document.querySelector("#three");

button3.addEventListener("click", function () {
  let giatri3 = button3.innerText;
  let input3 = document.querySelector("input");
  console.log(input3);
  //cập nhận giá trị mới cho nó :giá trị hiện tại của nó + giá trị mới
  document.querySelector("input").value =
    document.querySelector("input").value + giatri3;
});
let button4 = document.querySelector("#four");
button4.addEventListener("click", function () {
  let giatri4 = button4.innerText;
  let input4 = document.querySelector("input");
  input4.value = input4.value + giatri4;
});
let buttonAdd = document.querySelector("#add");
buttonAdd.addEventListener("click", function () {
  let giatriAdd = buttonAdd.innerText;
  let inputAdd = document.querySelector("input");
  inputAdd.value = inputAdd.value + giatriAdd;
});
let buttonEqual = document.querySelector("#equal");
let inputbang = document.querySelector("input");
buttonEqual.addEventListener("click", function () {
  inputbang.value = eval(inputbang.value); // trong ngoặc của eval phải là '1+2' thì nó mới ra 3
}); // vậy '1+2' đang ở dau ?

let bttDelete = document.querySelector("#delete");
let inputC = document.querySelector("input");
bttDelete.addEventListener("click", function () {
  inputC.value = "";
});
