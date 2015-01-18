(function ($hx_exports) { "use strict";
var com = {};
com.jungle = {};
com.jungle.Animal = $hx_exports.Animal = function(type,age) {
	if(age == null) age = 0.0;
	console.log("Animal:Constructor");
	this.type = type;
	this.age = age;
};
com.jungle.Animal.prototype = {
	getType: function() {
		return this.type;
	}
	,getAge: function() {
		return this.age;
	}
};
})(typeof window != "undefined" ? window : exports);
