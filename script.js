var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var  body = document.getElementById("gradient");
var button = document.querySelector("button");


function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function randomColor() {
  rndm1 = Math.floor(Math.random() * 256);
  rndm2 = Math.floor(Math.random() * 256);
  rndm3= Math.floor(Math.random() * 256);
  // color1.value = rgbToHex(randomNr1, randomNr2, randomNr3);
  rndm4 = Math.floor(Math.random() * 256);
  rndm5 = Math.floor(Math.random() * 256);
  rndm6 = Math.floor(Math.random() * 256);
  // color2.value = rgbToHex(randomNr4, randomNr5, randomNr6);
  body.style.background =
    "linear-gradient(to right, " +
    "rgb(" +
    rndm1 +
    ", " +
    rndm2 +
    ", " +
    rndm3 +
    ")" +
    ", " +
    "rgb(" +
    rndm4 +
    ", " +
    rndm5 +
    ", " +
    rndm6 +
    ")";
  css.textContent = body.style.background;
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomColor);

