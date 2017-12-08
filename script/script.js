function colours() {
  var colour = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
  ];
  
  var squares = document.querySelectorAll(".square");
  var pickedColour = colour[3];
  var colourDisplay = document.getElementById("colourDisplay");
  
  for(var i = 0; i < squares.length; i++) {
    //add initial colours to squares
    squares[i].style.backgroundColor = colour[i];
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
      var clickedColour = this.style.backgroundColor;
      
      if(clickedColour === pickedColour) {
        alert("Correct!");
      }
      else alert("wrong");
    })
  }
  
  colourDisplay.textContent = pickedColour;
}
function init() {
  colours();
}

window.onload = init;