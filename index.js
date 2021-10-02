var txtInput = document.querySelector(".txt-input");
var btnRed = document.querySelector("#btn-red");
var btnGreen = document.querySelector("#btn-green");
var btnBlue = document.querySelector("#btn-blue");

btnRed.addEventListener("click", redButtonClickHandler);
function redButtonClickHandler() {
  txtInput.style.color = "red";
}

btnGreen.addEventListener("click", greenButtonClickHandler);
function greenButtonClickHandler() {
  txtInput.style.color = "green";
}

btnBlue.addEventListener("click", blueButtonClickHandler);
function blueButtonClickHandler() {
  txtInput.style.color = "blue";
}
