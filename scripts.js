//Afternoon Assignment - Pixel Art Maker
//Create your own Pixel Art Maker, which lets you click on a grid to "paint" pixel art. The interface is completely up to you, but it could look something like this:


//It boils down to this: A user selects a color and clicks on pixels to paint them with the selected color.

//Here's the order of steps that I would implement:




//Add the rest of the standard rainbow colors to the color palette
//Add enough divs to fill up the entire screen
//Bonus Challenges:

//Add a color picker which allows the user to select any color. Look into the HTML5 color input.
//Add the ability to click and drag to paint multiple pixels at once
//Add a paintbucket tool which allows a user to drag a box across the screen and paint all pixels that fall inside that box

//Get 10 or so small divs on the screen (or 688...)
//window.onload = function() {


function canvasMaker(){
	for (var i = 0; i < 690; i++){
			var blankDiv = document.createElement('div');
			blankDiv.style.backgroundColor = '';
  		blankDiv.style.width = '2%';
  		blankDiv.style.float = 'left';
  		//blankDiv.style.position = 'absolute';
  		blankDiv.style.paddingBottom = '2%';
  		blankDiv.style.border = '1px solid black'
			document.body.appendChild(blankDiv);
	}
}		

canvasMaker();

// Set up listener on all divs
var divs = document.querySelectorAll("div");
for(var j = 0; j < divs.length; j++) {
	divs[j].addEventListener("click", function() {
		this.style.backgroundColor = color;

	});
};

//black, purple, red, blue, green, brown, white


//Global variable for color
var color =  "white";


var black = document.getElementById("black");
black.addEventListener("click", function() {
	color = "black"
})

var purple = document.getElementById("purple");
purple.addEventListener("click", function() {
	color = "purple"
})

var red = document.getElementById("red");
red.addEventListener("click", function() {
	color = "red"
})

var blue = document.getElementById("blue");
blue.addEventListener("click", function() {
	color = "blue"
})

var green = document.getElementById("green");
green.addEventListener("click", function() {
	color = "green"
})

var brown = document.getElementById("brown");
brown.addEventListener("click", function() {
	color = "brown"
})

var white = document.getElementById("white");
white.addEventListener("click", function() {
	color = "white"
})





