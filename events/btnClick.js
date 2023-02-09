var btn = document.getElementById("bgButton");

function whenPressed() {
  alert("button pressed");
}

// btn.onclick = whenPressed;

// btn.addEventListener("click", function () {
//   alert("button was clicked");
// });

// btn.addEventListener("click", whenPressed);

// now to change background color using button click event

var bgColor = document.querySelector("div");
// btn.addEventListener("click", function () {
//   bgColor.style.backgroundColor = "lightcoral";
// });

//will create a random rgb color to change background color whrn button is pressed

// var rgbColor = Math.floor(Math.random() * 255);

btn.addEventListener("click", function () {
  // bgColor.style.backgroundColor = rgb(
  //   " + rgbColor + ",
  //   "+ rgbColor +",
  //   "+ rgbColor +"
  // );

  bgColor.style.backgroundColor =
    "rgb(" +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    ")";
});

/// noe to add and remove clases:
var paragraph = document.getElementById("text");
paragraph.classList.add("big");
setInterval(function () {
  paragraph.classList.remove("big");
}, 1000);

/// nto change the size of text using buttons

var text = document.getElementById("changeTxt");
var incBtn = document.getElementById("inc");
var decBtn = document.getElementById("dec");
var initialSize = window.getComputedStyle(text).fontSize;
initialSize = parseInt(initialSize.substr(0, initialSize.length - 2));

incBtn.onclick = function () {
  initialSize = initialSize + 10;
  text.style.fontSize = initialSize + "px";
};

decBtn.addEventListener("click", function () {
  initialSize = initialSize - 10;
  text.style.fontSize = initialSize + "px";
});
