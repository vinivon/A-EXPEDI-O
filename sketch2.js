var astro_0;
var x = 50;
var y = 300;

function preload() {
	astro_0 = loadImage('astro_0.png');
	ceu = loadImage('country-platform-back.png');
	piso = loadImage('country-platform-tiles-example.png');
}

function setup() {
	createCanvas(600, 400);
	background(0);
}

function draw() {
	show();
	
		if(keyCode === RIGHT_ARROW) {
			x = x + 5;
		}
		if(keyCode === LEFT_ARROW) {
			x = x - 5;
		}
	keyCode=0;
}

function show() {
	image(ceu, 0, 0, width, height);
	image(piso, 0, 0, width, height);
	image(astro_0, x, y);
}
