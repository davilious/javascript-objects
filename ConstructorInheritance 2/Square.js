// Inherits from Rectangule
function Square(size){
	this.length = size;
	this.width = size;
}
/* In this version Square.prototype is overwrittern
with a new object that inherits from Rectangle.prototype
The Rectangle constructor is never called
 * ====================== */  
Square.prototype = Object.create(Rectangle.prototype,{
	contructor : {
		configuragle : true,
		enumerable : true,
		value : Square,
		writable : true
	}
});

// Square has its own method toString 
Square.prototype.toString = function(){
	return "[Square " + this.length + " x " + this.width +" ]"; 
}