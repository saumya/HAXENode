(function ($hx_exports) { "use strict";
var ApplicationEntry = function() {
	console.log("ApplicationEntry:Constructor");
	var j = new com.jungle.Jungle();
	console.log(j.isKingAvailable());
	console.log(j.getAllTrees());
};
ApplicationEntry.main = function() {
	console.log("main");
	var ApplicationEntry1 = new ApplicationEntry();
};
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
com.jungle.Jungle = function() {
	console.log("Jungle:Constructor");
	this.allAnimals = new Array();
	this.allTrees = new Array();
	this.isKingAdded = false;
	var _g = 0;
	while(_g < 10) {
		var i = _g++;
		var t = new com.jungle.Tree(i);
		this.allTrees.push(t);
	}
	this.addKing();
};
com.jungle.Jungle.prototype = {
	addKing: function() {
		var king = new com.jungle.Animal("Lion",1.0);
		this.allAnimals.push(king);
		this.isKingAdded = true;
	}
	,isKingAvailable: function() {
		return this.isKingAdded;
	}
	,getAllTrees: function() {
		return this.allTrees;
	}
};
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
ApplicationEntry.main();
})(typeof window != "undefined" ? window : exports);
