let element = document.querySelector("#coffinDance");
element.style.position = "absolute";
element.style.top = 0;
function upArrow() {
  element.style.top = parseInt(element.style.top) - 5 + "px";
}
function downArrow() {
  element.style.top = parseInt(element.style.top) + 5 + "px";
}
element.style.left = 0;
function rightArrow() {
  element.style.left = parseInt(element.style.left) + 5 + "px";
}
function leftArrow() {
  element.style.left = parseInt(element.style.left) - 5 + "px";
}
function moveSelection(evt) {
  switch (evt.keyCode) {
    case 38:
      upArrow();
      break;
    case 40:
      downArrow();
      break;
    case 39:
      rightArrow();
      break;
    case 37:
      leftArrow();
      break;

    default:
      break;
  }
  console.log(evt.keyCode);
}
window.addEventListener("keydown", moveSelection);
