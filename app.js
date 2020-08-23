const colors = ["Green", "#F15025", "#6f4a8e", "Red", "#cd5c5c"];

const btn= document.querySelector("button");
const span = document.querySelector("span");

// generating random number to select color from array
function randNumber() {
  return Math.floor(Math.random() * colors.length);
}

//event listner for button

btn.addEventListener("click", function () {
  var rand = randNumber();
  document.body.style.backgroundColor = colors[rand];
 span.innerHTML=colors[rand];
 span.style.color=colors[rand];

});

//event listener for simple tag

// document.querySelector(".a1").addEventListener("click", function () {
// document.querySelector("body").style.backgroundColor = "#e0ece4";
// document.querySelector("span").innerHTML = "#e0ece4";
// document.querySelector("span").style.color = "#e0ece4";
// });
