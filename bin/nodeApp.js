// Node uses two kinds of exports while defining a module
// 1. modules.exports = function(){}
// 2. exports.Animal = function(){}
//
console.log('Application');
//
/*
// 1. Example 1 : using the generated single application JS
var app = require('./hxApp.js');
console.log('==========================');
console.log(app);
console.log('==========================');

// 1.1. : example : 1 : to make new Animal
var animal_1 = new app.Animal('CAT',9);
// 1.2. : example : 2 : to make new Animal, save the Constructor as a new "var" and then use it 
var Animal = app.Animal;
var animal_2 = new Animal('Tiger',6);
//lets log
console.log(animal_1);
console.log(animal_2);
*/

//Example 2 : Using individual Class from the single JS
var o = require('./Animal');
var Animal = o.Animal;
//
var c = new o.Animal('Cat',4);
var a1 = new Animal('Lion',5);
var a2 = new Animal('Tiger',8);

console.log(c);
console.log(a1);
console.log(a2);
console.log('===================');
console.log(a1.getType());
console.log(a1.getAge());
console.log('===================');










