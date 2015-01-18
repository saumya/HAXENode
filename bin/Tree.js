(function () { "use strict";
var com = {};
com.jungle = {};
com.jungle.Tree = function(age,name) {
	if(name == null) name = "unknown Tree";
	if(age == null) age = 0.0;
	console.log("Tree : Constructor");
	this.age = age;
	this.name = name;
};
com.jungle.Tree.prototype = {
	breath: function() {
		console.log("Tree:breath");
	}
	,getName: function() {
		return this.name;
	}
	,getAge: function() {
		return this.age;
	}
};
})();
