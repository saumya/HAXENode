/*
* By : Saumya
* Example created to work with JS on HAXE
*/
package com.jungle;
//import the classes
import com.jungle.Tree;
import com.jungle.Animal;
// Jungle Class
// @:expose("myLib.Jungle")
class Jungle 
{
	private var allAnimals:Array<Animal>;
    private var allTrees:Array<Tree>;
    private var isKingAdded:Bool;
    public function new(){
        trace('Jungle:Constructor');
        this.allAnimals = new Array<Animal>();
        this.allTrees = new Array<Tree>();
        this.isKingAdded = false;
        //create some trees
        for (i in 0...10) {
            var t:Tree = new Tree(i);
            this.allTrees.push(t);
        }
        //
        this.addKing();
    }
    private function addKing():Void{
        var king:Animal = new Animal('Lion',1.0);
        this.allAnimals.push(king);
        this.isKingAdded = true;
    }
    public function isKingAvailable():Bool{
        return this.isKingAdded;
    }
    public function getAllTrees():Array<Tree>{
        return this.allTrees;
    }
}