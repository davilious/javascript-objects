// Inherits from Rectangule
function Square(size){
	this.length = size;
	this.width = size;
}
// Inherits from Rectangule
Square.prototype = new Rectangle();
// Define the contructor por this class
Square.prototype.constructor = Square;

// Square has its own method toString 
Square.prototype.toString = function(){
	return "[Square " + this.length + " x " + this.width +" ]"; 
}