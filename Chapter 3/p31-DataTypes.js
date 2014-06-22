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

console.log(typeof age); //undefined?!





//NULL type! - use when defining a variable meant to 
//later hold an object, an 'object' type itself

var car = null;
alert(typeof car); //"object"

if (car != null){
	console.log("There is something in the car (variable)");
}

//null is weirdly, superficially equal to undefined, because its derivative

alert(null == undefined); //true

alert(null === undefined); // false?! (not 'strictly' equivalent)





//Boolean type, true or false. Lots of vars have boolean equivalents:

var message = 'Hello Warld';
var messageAsBoolean = Boolean(message); // true


var truth = "nonempty string!";
var falth = "";

	truth = 1; // non-zero number
	falth = 0; // or Nan (not a number)

	truth = function(){
				console.log(Boolean(this)); //any object!
			}
	falth = null;

//flow-control statements automatically perform the Boolean conversion

var message = "Hello Wooorldy!";

if (message) {
	alert('Message is true')
}

var nope;
if (!nope){
	alert('nope is false!')
} 

//Number type

//integer type / floating point decimal 

var intNum = 666;

//octal number format, not allowed in strict mode

var octalNum1 = 070; //valid
var octalNum2 = 079; //not an octal, interpreted as 79 (octal 0, 1-7)















