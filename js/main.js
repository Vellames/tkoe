var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext("2d");

function main(){

	test = new GrassTile();
	test.setImageSrc("imgs/scenary/grass/grass_tile.png")

	loop();
}

function loop(){
	update();
	draw();

	window.requestAnimationFrame(loop);
}

function draw(){
	test.draw()
}

function update(){

}

main();