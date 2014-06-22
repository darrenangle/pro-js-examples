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

// isNaN() function accepts argument of any data type, tests if NaN.
// Any value that cannot be converted to a number returns true
alert(isNaN(Nan)); //true
alert(isNaN(10));  //false, 10 is a number
alert(isNaN("10"));//false, can be converted to number 10
alert(isNaN("blue")); // true, cannot be converted to a number
alert(isNaN(true)); // false, can be converted to 1


//Number conversions

	//Booleans get converted to 1 (true) and 0 (false)
	var num1 = Number(true); //1
	var num1 = Number(false);//0

	//Numbers get passed through and returned
	var num2 = Number(11); 

	//null returns 0
	var num3 = Number(null); //0

	//undefined returns NaN
	var num4 = Number(undefined); // NaN

	//Strings depend on the string

		//strings containing only numbers convert to decimal number, leading 0's ignored
		var num5 = Number("123"); //123

		//strings containing floating points convert to floating points
		var num6 = Number("1.1"); //1.1

		//strings containing hexidecimal formats get converted to integer matching hex
		var num7 = Number("0xf"); //15

		//empty strings are converted to 0
		var num8 = Number(""); //0

		//if string contains anything else, its converted to NaN

	//Number() has a lot of fucked symptoms, so use parseInt instead, when dealing with integers. 
	//parseInt first character must be a number, + or - sign, if string
	//stops at first non-numeric and returns preceding integer 22.5 --> 22 (because .)

		var num1 = parseInt("12345blue"); 	//12345
		var num2 = parseInt(""); 			//NaN
		var num3 = parseInt("0xA"); 		//10 (hexadecimal)
		var num4 = parseInt(22.5);			//22
		var num5 = parseInt("70");			//70 (decimal)

	//parseInt provides radix as second argument. radix = number of digits to use in particular format
	//radix inclusion is good practice, for reader clarity and guaranteed behavior
		
		var num1 = parseInt("10", 2); //2 - parsed as binary
		var num2 = parseInt("10", 8); //8 - parsed as octal
		var num3 = parseInt("10", 10);//10- parsed as decimal
		var num4 = parseInt("10", 16);//16- parsed as hexidecimal


	//parseFloat() is similar to parseInt, but accepts floating point characters.
	//stops parsing when invalid floating point character reached

		var num1 = parseFloat("12345blue");	//12345 - integer
		var num2 = parseFloat("0xA");		//0 - hexidecimals always become 0
		var num3 = parseFloat("22.5");		//22.5
		var num4 = parseFloat("22.34.5");	//22.34
		var num5 = parseFloat("0908.5");	//908.5
		var num6 = parseFloat("3.125e7"); 	//31250000


//The String Type!

		














