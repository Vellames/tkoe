var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext("2d");

var mapArray = ScenaryManager.generateMapArray();
var mapConfig = ScenaryManager.mapConfig;

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
	drawScenary();
}

function update(){

}


function drawScenary(){
    for(var column = 0; column < mapConfig.columns; column++){
        for(var row = 0; row < mapConfig.rows; row++){
            const element = mapArray[column][row];
            
            switch(element.tile){
                case "grass":
                    const x = column * mapConfig.tilesWidth;
                    const y = row * mapConfig.tilesHeight;
                    
                    // Instance the grass
                    if(element.tileInstance == undefined){
                        element.tileInstance = new GrassTile(canvasContext, mapConfig.tilesWidth, mapConfig.tilesHeight, x , y);
                    }
                    element.tileInstance.draw();
                    
                    // Instance the object
                    if(element.object != undefined && element.objectInstance == undefined){
                        const object = element.object;
                        element.objectInstance = new window[object](canvasContext, mapConfig.tilesWidth, mapConfig.tilesHeight, x , y);
                    }
                    
                    if(element.objectInstance != undefined){
                        element.objectInstance.draw();   
                    }
                    
                    
                    break;
            }
            
        }
    }
}

main();