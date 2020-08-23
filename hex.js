var hex=[ 0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

var btn=document.querySelector("button");
var color=document.querySelector(".color");


function RandomNumber() {
    return Math.floor(Math.random() * hex.length);
  }


function hexgenerator() {
    var hexCode="#";
  for (var i = 0; i < 6; i++) {
    var number = RandomNumber();
    hexCode += hex[number];
  }
  return hexCode;
}


btn.addEventListener("click",function() {
      var hexgen=hexgenerator();
      document.body.style.backgroundColor=hexgen.toString();
      color.textContent=hexgen.toString();


});

