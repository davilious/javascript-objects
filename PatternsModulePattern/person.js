/* Modula Pattern 
 * ====================== */  
 var person = (function(){
 	 var age = 25;
 	 return {
 	 	name: "Miguel",
 	 	get age(){
 	 		return age;
 	 	},
 	 	growOlder: function(){
 	 		age++
 	 	}
 	 }
 })();
