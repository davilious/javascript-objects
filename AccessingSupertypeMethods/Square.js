// Inherits from Rectangule
// The Square constructor calls the Rectangle
// constructor and passes in this as well as size two times
// onece for length and onces for with
// doing so creates the length and width properties on the 
// newly-created object, each with a value equal to size
function Square(size, name){
	Rectangle.call(this, size, size);
	// other properties
	this.name = name;
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

// Calls Rectangle.prototype.toString() by using
// call()
Square.prototype.toString = function(){
	var text = Rectangle.prototype.toString.call(this);
	return text.replace("Rectangle", "Square");
}