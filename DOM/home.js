var getNumber = document.getElementById("num");
var number = getNumber.innerHTML;
var bgImage = document.getElementById("img");

setInterval(function () {
  if (number > 0) {
    number = number - 1;
    getNumber.innerHTML = number;
  }
  var backImgPath = number % 2 === 0 ? "images/bg11.avif" : "images/bg2.avif";
  bgImage.src = backImgPath;
}, 1000);
