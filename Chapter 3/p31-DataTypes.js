//typeof Operator, determines data type of a variable

var stringy = 'This is a string';
console.log(typeof stringy); //'string'
console.log(typeof 666); //'number'

//Undefined type, When a variable is declared using var but not initialized

var message;
console.log(typeof message); //undefined

var message2;
//var age

console.log(message2); //undefined
console.log(age); //error!

//type of returns 'undefined' on uninitialized *and* undeclared variables
console.log(typeof message2); //undefined
console.log(typeof age); //undefined!?

