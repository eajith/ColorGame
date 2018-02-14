
alert("sadf");

var square = document.querySelectorAll(".square");
var colors = ["rgb(255, 0, 1)",
			  "rgb(123, 100, 120)"
			  "rgb(230, 120, 111)"
			  "rgb(50, 123, 255)"
			  "rgb(255, 0, 222)"
			  "rgb(255, 100, 255)"
			];

for(var i=0;i<square.length;i++){
	square[i].style.backgroundColor = colors[i];
}