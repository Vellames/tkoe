function GameObject(width, height, x, y){

	var width = this.setWidth(width);
	var height = this.setHeight(height);

	var x = this.setX(x);
	var y = this.setY(y);
}

// Getters and Setters
GameObject.prototype.setWidth = function(widthParam) {
	if(!(widthParam >= 0)){
		widthParam = 0;
	}
	width = widthParam
};

GameObject.prototype.getWidth = function() {
	return width;
};

GameObject.prototype.setHeight = function(heightParam){
	if(!(heightParam >= 0)){
		heightParam = 0;
	}
	height = heightParam;
}

GameObject.prototype.getHeight = function(){
	return height;
}

GameObject.prototype.setX = function(xParam){
	if(!(xParam >= 0)){
		xParam = 0;
	}
	x = xParam
}

GameObject.prototype.getX = function(){
	return x;
}

GameObject.prototype.setY = function(yParam){
	if(!(yParam >= 0)){
		yParam = 0;
	}
	y = yParam;
}

GameObject.prototype.getY = function(){
	return y;
}

//////// End getters and setters