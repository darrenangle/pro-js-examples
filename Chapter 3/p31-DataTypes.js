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
var octalNum3 = 08;  //invalid - interpreted as 8


//Floating-Point Values

var floatNum1 = 1.1;
var floatNum2 = 0.1;
var floatNum3 = .1; //valid, but not advisable

//storing floating points uses 2x memory, so ECMAscript converts to integers when possible

var floatNum1 = 1.; //converts to 1
var floatNum2 = 10.0; // converts to 10

//very large or small numbers can youse e-notation (*10^p) 

var eNum = 3.125e7;

//Floating point inaccuracy in arithmetic
0.1 + 0.2 !== 0.3; // true 

//Big.js if absolutely necessary, otherwise dont test for specific floating point values. Round!




//NaN

//Used to indicate when an operation intedned to return a number has failed- instead of throwing an error
//dividing by zero creates a NaN, but allows processing to continue

//NaN is not equal to any value, including Nan

alert(NaN === NaN); //false

// isNan() function accepts argument of any data type, tests if NaN.
// Any value that cannot be converted to a number returns true














