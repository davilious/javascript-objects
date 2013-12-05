function Rectangle(length, width){
	this.length = length;
	this.width = width;
}
Rectangle.prototype.getArea = function(){
	return this.length * this.width;
}
Rectangle.prototype.toString = function(){
	return "[Rectangle " + this.length + " x " + this.width +" ]"; 
}

