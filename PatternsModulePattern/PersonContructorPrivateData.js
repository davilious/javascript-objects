var Person = (function(){

	var age = 25;

	function Person(name){
		this.name = name;
		Object.defineProperty(this, "age", {
			get: function(){
				return age;
			},
			enumable: true,
			configurable: true
		});
	}

	Person.prototype.growOlder = function(){
		age++;
	}
	
	return Person;
})();