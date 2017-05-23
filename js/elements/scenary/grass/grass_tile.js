function GrassTile(canvasContext, width, height, x, y){
	GameObject.call(this, canvasContext, width, height, x, y);
    
    // Setting the default image for this tile;
    this.setImageSrc("imgs/scenary/grass/grass_tile.png");
}
inheritance(GameObject, GrassTile);
