function Person(name){
	var age = 25;
	this.name = name;

	Object.defineProperty(this, "age", {
		get: function(){
			return age;
		},
		enumable: true,
		configurable: true
	});

	this.growOlder = function(){
		age++;
	}
}