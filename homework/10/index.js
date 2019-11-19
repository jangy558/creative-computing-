/*
	Created seperate Javascript file for modularity;
	Utilized ES6(Ecmascript 2016+)'s arrow functions;
*/

//	Reference to body Node;
const body = document.querySelector("body");

//Created Hue, Saturation, & Lightness variables for further diversity with colors;
let hue = 0;
let sat = 100;
let light = 50;

/*
	setInterval will invoke a function that'll change the
global hue variable that Body's style's HSL func is utilizing;

- wrote conditional if statement to reset Hue back to red when it reaches
bright green;
*/

setInterval(() => {
	//Utilized backticks for more semantic string values;
	body.style.backgroundColor = `hsl(${hue}, ${sat}%, ${light}%)`;
	hue += 1;
	if(hue > 120) hue = 0;

}, 50);


/*

For more static & immediate spectrum change;
Comment out below :

setInterval(() => {
	body.style.backgroundColor = `hsl(${hue}, ${sat}%, ${light}%)`;
	hue += 30;
	if(hue > 360) hue = 0;
}, 1000);

*/