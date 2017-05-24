 function GameObject(context, width, height, x, y){

	// Canvas Context
	this.context = context;

	this.width = this.setWidth(width);
	this.height = this.setHeight(height);

	this.x = this.setX(x);
	this.y = this.setY(y);

	this.image;
}

// Getters and Setters
GameObject.prototype.setWidth = function(widthParam) {
	if(!(widthParam >= 0)){
		widthParam = 0;
	}
	this.width = widthParam
    return this.width;
};

GameObject.prototype.getWidth = function() {
	return this.width;
};

GameObject.prototype.setHeight = function(heightParam){
	if(!(heightParam >= 0)){
		heightParam = 0;
	}
	this.height = heightParam;
    return this.height;
}

GameObject.prototype.getHeight = function(){
	return this.height;
}

GameObject.prototype.setX = function(xParam){
	if(!(xParam >= 0)){
		xParam = 0;
	}
	this.x = xParam
    return this.x
}

GameObject.prototype.getX = function(){
	return this.x;
}

GameObject.prototype.setY = function(yParam){
	if(!(yParam >= 0)){
		yParam = 0;
	}
	this.y = yParam;
    return this.y;
}

GameObject.prototype.getY = function(){
	return this.y;
}

GameObject.prototype.setImageSrc = function(imgSrc){
	this.image = new Image();
	this.image.src = imgSrc;
}

//////// End getters and setters

GameObject.prototype.draw = function(){
	canvasContext.drawImage(this.image, this.x, this.y);
}

GameObject.prototype.update = function(){
	//context.fillRect
}