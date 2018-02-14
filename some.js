var numSquares = 6;
var square = document.querySelectorAll(".square");
var guessColor = document.getElementById("guess");
var colors = getRandomColor(numSquares);
var hcolor = document.querySelector("h1");
var pickedColor = pick();
var logMsg = document.querySelector("#log");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easybtn");
var hard = document.querySelector("#hardbtn");
console.log(reset);
guessColor.textContent = pickedColor;

easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	logMsg.textContent = "";
	numSquares = 3;

	colors=getRandomColor(numSquares);

	pickedColor = pick();
	guessColor.textContent = pickedColor;
	for(var i=0;i<square.length;i++){
		if(colors[i]){
			square[i].style.backgroundColor = colors[i];
		}
		else{
			square[i].style.display= "none"; 
		}
	}
});

hard.addEventListener("click",function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	 logMsg.textContent = "";
	numSquares = 6;
	colors=getRandomColor(numSquares);
	pickedColor = pick();
	for(var i=0;i<square.length;i++){
			square[i].style.backgroundColor = colors[i];
			square[i].style.display= "block"; 
	}
});


reset.addEventListener("click",function(){
   colors = getRandomColor(numSquares);
   pickedColor=pick();
   guessColor.textContent = pickedColor;
   logMsg.textContent = "";
   this.textContent="New Colors";
   for(var i=0;i<square.length;i++){
   		square[i].style.backgroundColor = colors[i];
   }

   hcolor.style.backgroundColor = "steelblue"; 
});

for(var i=0;i<square.length;i++){
	square[i].style.backgroundColor = colors[i];
	square[i].addEventListener("click",function(){
		if(this.style.backgroundColor == guessColor.textContent){
			logMsg.textContent = "Correct!";
			reset.textContent = "Play Again";
		    hcolor.style.backgroundColor=this.style.backgroundColor;
			changeColor(this.style.backgroundColor);
		}
		else{
			
			this.style.backgroundColor = "#232323";
			logMsg.textContent = "Try Again";
		}
	});
}

function changeColor(color){
	for(var i=0;i<square.length;i++){
		square[i].style.backgroundColor = color;
	}
}

function pick(){
	var j =Math.floor(Math.random()*colors.length);
	return colors[j]
}

function getRandomColor(n){
	var arr = [];

	for(i=0;i<n;i++){
		arr.push(getColors());
	}
	return arr;
}

function getColors(){
	var r = Math.floor(Math.random()*255);
	var g = Math.floor(Math.random()*255);
	var b = Math.floor(Math.random()*255);
	return "rgb(" + r + ", " + g  + ", " + b + ")"
}

