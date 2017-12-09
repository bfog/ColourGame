function colours() {
  var colour = generateRandomColours(6);
  
  var squares = document.querySelectorAll(".square");
  var pickedColour = pickColour(colour);
  var colourDisplay = document.getElementById("colourDisplay");
  var messageDisplay = document.querySelector("#message");
  var h1 = document.querySelector("h1");
  
  colourDisplay.textContent = pickedColour;
  
  for(var i = 0; i < squares.length; i++) {
    //add initial colours to squares
    squares[i].style.backgroundColor = colour[i];
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
      var clickedColour = this.style.backgroundColor;
      
      if(clickedColour === pickedColour) {
        messageDisplay.textContent = "Correct!";
        changeColours(clickedColour, squares);
        h1.style.backgroundColor = clickedColour;
      }
      else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    })
  }
}

function generateRandomColours(num) {
  var arr = [];
  
  for(var i =0; i < num; i++) {
    arr.push(randomColour());
  }
  
  return arr;
}

function randomColour() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function changeColours(colour, squares) {
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colour;
  }
}

function pickColour(colour){
  var random = Math.floor(Math.random() * colour.length);
  return colour[random];
}

function init() {
  colours();
}

window.onload = init;