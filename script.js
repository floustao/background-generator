const color1 = document.querySelector("[name='color1']");
const color2 = document.querySelector("[name='color2']");
const h3 = document.querySelector('h3');
let body = document.querySelector('body');
let direction = document.querySelector("[name='direction']");

function updateColor() {
  body.style.background = `linear-gradient(${direction.value}deg, ${color1.value}, ${color2.value}`;
  h3.textContent = body.style.background + ";";
}

color1.addEventListener('input', updateColor);
color2.addEventListener('input', updateColor);
direction.addEventListener('input', updateColor);
