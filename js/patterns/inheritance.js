var inheritance = function(mother, child){
	var motherCopy = Object.create(mother.prototype);
	child.prototype = motherCopy;
	child.prototype.constructor = child;
	return child;
}