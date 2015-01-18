//
console.log('Application');
//
/*
var o = require('./Animal');
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
*/

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






