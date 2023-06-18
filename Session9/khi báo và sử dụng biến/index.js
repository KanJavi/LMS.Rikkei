// Bài 1
let f = 20.5;
let b = true;
let s = "Hà Nội";
let i = 10;
document.write("i=" + i);
document.write("<br/>");
document.write("f=" + f);
document.write("<br/>");
document.write("b=" + b);
document.write("<br/>");
document.write("s=" + s);
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");

// Bài 2
let width = 20;
let height = 10;
let area = width * height;
document.write("Area=" + area);
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");
let a = parseInt(prompt("nhập vào số a"));
let c = parseInt(prompt("nhập vào số c"));
if (a % c === 0) {
  alert(a + " là bội số của " + c);
} else {
  alert(a + " không phải là bội số của " + c);
}
