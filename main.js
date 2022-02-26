let red_input = document.getElementById("red-input");
let green_input = document.getElementById("green-input");
let blue_input = document.getElementById("blue-input");
let red_code = document.getElementById("red-code");
let green_code = document.getElementById("green-code");
let blue_code = document.getElementById("blue-code");
let circle = document.querySelector(".circle");

function showData() {
  let bg = {
    backGround: `rgb(${red_code.textContent}${green_code.textContent}${blue_code.textContent})`,
  };
  red_code.textContent = red_input.value + ", ";
  green_code.textContent = green_input.value + ", ";
  blue_code.textContent = blue_input.value;
  circle.style.background = bg.backGround;
  progressColor();
}
showData();

function progressColor(e) {
  let bg = {
    backGround: `rgb(${red_code.textContent}${green_code.textContent}${blue_code.textContent})`,
  };
  if (e.value >= 0 && e.value <= 255) {
    red_code.textContent = e.value + ",";
    green_code.textContent = 0 + ",";
    blue_code.textContent = 0;
  } else if (e.value > 255 && e.value <= 510) {
    red_code.textContent = 255 + ",";
    green_code.textContent = e.value - 255 + ",";
    blue_code.textContent = 0;
  } else {
    red_code.textContent = 255 + ",";
    green_code.textContent = 255 + ",";
    blue_code.textContent = e.value - 510;
  }
  circle.style.background = bg.backGround;
}
