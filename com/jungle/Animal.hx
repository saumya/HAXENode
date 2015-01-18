/*
* By : Saumya
* Example created to work with JS on HAXE
*/
package com.jungle;
// An animal
//@:expose("Saumya.Animal")

@:expose("Animal")
class Animal 
{
	private var type:String;
    private var age:Float;
    public function new(type:String,age:Float=0.0){
        trace('Animal:Constructor');
        this.type = type;
        this.age = age;
    }
    public function getType():String{
        return this.type;
    }
    public function getAge():Float{
        return this.age;
    }
}