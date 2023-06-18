let ball = document.querySelector("#below");
let btn = document.querySelector("#btn");
let btnLeft = document.querySelector("#btnLeft");
ball.style.position = "relative";
ball.style.left = 0;
function onClick() {
  ball.style.left = parseInt(ball.style.left) + 10 + "px";
}
btn.addEventListener("click", onClick);
ball.style.right = 0;
function clickLeft() {
  ball.style.left = parseInt(ball.style.left) - 10 + "px";
  console.log(ball.style.left);
}
btnLeft.addEventListener("click", clickLeft);
