var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll('.square');
var colorTarget = document.getElementById("colorTarget");
var pickedColor = pickColor();
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
	message.textContent = " ";
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorTarget.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.background = colors[i];
			} else{
			squares[i].style.display = "none";
		}
	
	}
	h1.style.background = "steelblue";
});

hardBtn.addEventListener("click", function(){
	message.textContent = " ";
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorTarget.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		}
	
	
	h1.style.background = "steelblue";
});


resetButton.addEventListener("click", function(){
	message.textContent = " ";
	//generate new random colors
	colors = generateRandomColors(numSquares);
	//pick a new random color of array
	pickedColor = pickColor();
	//change colorTarget to match picked color
	colorTarget.textContent = pickedColor;
	//change colors of squares
	this.textContent = "New Colors";
	for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";

});


colorTarget.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.background;
		console.log(clickedColor);
		console.log(pickedColor);

		if(clickedColor === pickedColor){
		message.textContent = "Correct!";
		changeColor(pickedColor);
		h1.style.background = pickedColor;
		resetButton.textContent = "Play Again";
		}else{
		this.style.background = "#232323";
		message.textContent = "Try Again!";
		}

	});
}

function changeColor(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
		}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];

	//add num random colors to array
	for (var i = 0; i < num; i++) {
		//get random color and push to array
		arr.push(randomColor());

	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a red from 0 to 255
	var r = Math.floor(Math.random()*256)
	//pick a green from 0 to 255
	var g = Math.floor(Math.random()*256)
	//pick a blue from 0 to 255
	var b = Math.floor(Math.random()*256)
	"rgb(r, g, b)"
	return "rgb("+ r + ", "+ g + ", "+ b +")";

}

// 






