let red_input = document.getElementById("red-input");
let green_input = document.getElementById("green-input");
let blue_input = document.getElementById("blue-input");
let red_code = document.getElementById("red-code");
let green_code = document.getElementById("green-code");
let blue_code = document.getElementById("blue-code");
let circle = document.querySelector(".circle");

function showData() {
  red_code.textContent = red_input.value + ", ";
  green_code.textContent = green_input.value + ", ";
  blue_code.textContent = blue_input.value;

  bg = {
    backGround: `rgb(${red_code.textContent}${green_code.textContent}${blue_code.textContent})`,
  };
  circle.style.background = bg.backGround;
}
showData();
