//
console.log('Application');
//
// Example 1 : using the generated single application JS
var app = require('./hxApp.js');
console.log('==========================');
console.log(app);
console.log('==========================');

// example : 1 : to make new Animal
var animal_1 = new app.Animal('CAT',9);
// example : 2 : to make new Animal, save the Constructor as a new "var" and then use it 
var Animal = app.Animal;
var animal_2 = new Animal('Tiger',6);
//lets log
console.log(animal_1);
console.log(animal_2);

//Example 2 : Using individual Class from the single JS

/*
var o = require('./Jungle');
var Animal = o.Animal;

console.log(o);
console.log(o.Animal);


var a1 = new Animal('Lion',5);
var a2 = new Animal('Tiger',8);

console.log(a1);
console.log(a2);

console.log(a1.getType());
console.log(a1.getAge());
console.log('-------------------');
console.log(a1.age);
console.log(a1.type);

var c = new o.Animal('Cat',4);
console.log(c);
*/




/*
//Node Way

// Uses modules.exports = function(){}
//var Animal = require('./Animal');

// Uses only exports.Animal = function(){}
var o = require('./Animal');
var a1 = o.Animal('Lion',25);
var a2 = o.Animal('Tiger',8);

console.log(a1);
console.log(a1.getType());
console.log(a1.getAge());
console.log('-------------------');
console.log(a1.age);
console.log(a1.type);

console.log(a2);
*/

/*
var Animal = o.Animal;


console.log(Animal);

var a1 = new Animal('Lion',5);
console.log(a1);

console.log(a1.getType());
console.log(a1.getAge());
console.log('-------------------');
console.log(a1.age);
console.log(a1.type);
*/






