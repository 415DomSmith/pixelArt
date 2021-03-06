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

//Makes the white grid/canvas.
function canvasMaker(){
	for (var i = 0; i < 2838; i++){
			var blankDiv = document.createElement('div');
			blankDiv.style.backgroundColor = '';
  		blankDiv.style.width = '1%';
  		blankDiv.style.float = 'left';
  		//blankDiv.style.position = 'absolute';
  		blankDiv.style.paddingBottom = '1%';
  		blankDiv.style.border = '1px solid black'
			document.body.appendChild(blankDiv);
	}
};		

canvasMaker();

// Set up listener on all divs
var divs = document.querySelectorAll("div");
for(var j = 0; j < divs.length; j++) {
	divs[j].addEventListener("click", function() {
		this.style.backgroundColor = color;

	});
	//divs[j].addEventListener("dragover", function(event) {event.preventDefault(); }, false);	
};






//holds the color value
var color =  "white";

//Each color buttons click function, and reset call for the other buttons
var black = document.getElementById("black");
black.addEventListener("click", function() {
	color = "black";
	buttonReset();
	black.style.backgroundColor = "rgba(20,20,20,0.75)";
});

var purple = document.getElementById("purple");
purple.addEventListener("click", function() {
	color = "purple";
	buttonReset();
	purple.style.backgroundColor = "rgba(114,37,163,0.75)";
});

var red = document.getElementById("red");
red.addEventListener("click", function() {
	color = "red";
	buttonReset();
	red.style.backgroundColor = "rgba(255,0,0,0.55)";
});

var blue = document.getElementById("blue");
blue.addEventListener("click", function() {
	color = "blue";
	buttonReset();
	blue.style.backgroundColor = "rgba(0,0,255,0.55)";
});

var green = document.getElementById("green");
green.addEventListener("click", function() {
	color = "green"
	buttonReset();
	green.style.backgroundColor = "rgba(0,255,0,0.35)";
});

var brown = document.getElementById("brown");
brown.addEventListener("click", function() {
	color = "brown";
	buttonReset();
	brown.style.backgroundColor = "rgba(94,69,43,0.75)";
});

var yellow = document.getElementById("yellow");
yellow.addEventListener("click", function() {
	color = "yellow";
	buttonReset();
	yellow.style.backgroundColor = "rgba(255,247,21,0.35)";
});

var white = document.getElementById("white");
white.addEventListener("click", function() {
	color = "white";
	buttonReset();
	white.style.backgroundColor = "rgba(100,100,100,0.75)";
});

//reset button function, to visibly deselect the other colors
var buttons = document.querySelectorAll("h3");
function buttonReset(){
	for (var k = 0; k < buttons.length; k++){
		buttons[k].style.backgroundColor = "";
	} 
};
//reset button to refresh page and wipe the board.
var reset = document.getElementById("reset");
reset.addEventListener("click", function(){
		window.location.reload();
	});


