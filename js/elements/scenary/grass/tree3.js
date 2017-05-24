function Tree3(canvascontext, width, height, x, y){
	GameObject.call(this, canvasContext, width, height, x, y);
    
    // Setting the default image for this object;
    this.setImageSrc("imgs/scenary/grass/tree3.png");
}
inheritance(GameObject, Tree3);