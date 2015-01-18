/*
* By : Saumya
* Example created to work with JS on HAXE
*/
package com.jungle;
// A Basic Tree
// @:expose("myLib.Tree")
class Tree 
{
	private var age : Float;
	private var name : String;
	public function new(age:Float=0.0,name:String='unknown Tree'){
		trace ('Tree : Constructor');
		this.age = age;
		this.name = name;
	}
	private function breath():Void{
		trace('Tree:breath');
	}
	public function getName():String{
		return this.name;
	}
	public function getAge():Float{
		return this.age;
	}
}