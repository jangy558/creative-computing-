
var body = document.querySelector("body");


var hue = 0;
var sat = 100;
var light = 50;



setInterval(	function (){
	
	body.style.backgroundColor = `hsl(${hue}, ${sat}%, ${light}%)`;
	hue += 1;
	if(hue > 120) hue = 0;

}, 50);


// I asked people who do coding around me to get some help. 