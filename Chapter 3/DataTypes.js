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


//The String Type

	//string data is zero or more Unicode characters delineated by "double"	or 'single' quotes

	var firstName = "Darren";
	var lastName = "Angle";

	//no difference in quotes interpretation, but they must match

	var name = "Darren Angle'; <--- syntax error"


	//Character literals (to represent non-printable and other characters)
	/*
		\n 		New Line
		\t 		Tab
		\b 		Backspace
		\r 		carriage return
		\f 		form feed
		\\ 		Backslash
		\' 		single quote
		\" 		double quote
		\xnn 	Hexidecimal code where n = hexidecimal digit (\x41 is A)
		\unnn	Unicode character where n = hex digit (\u03a3 equals Σ)
	*/

	//Character literals can be included anywhere in string and be interpreted as a single character
	
	var text = "This is the letter sigma: \u03a3.";
	alert(text.length); //outputs 28 even though escape sequence (character literal) is 6 digits long




	//Immutability

	//Strings are immutable so their values can't change once created.
	//strings need to be destroyed and filled with a new string in order to change

	var lang = "Java";
	var lang = lang + "Script";

	//Behind the scenes, new string with 10 spaces created, filled with 'JavaScript', and original string is destroyed


	//Converting to String

	//toString() method
	var age = 11; 
	var ageAsString = age.toString(); // "11"
	var found = true;
	var foundAsString = found.toString(); // "true"

	//toString() accepts a single argument, the radix in which to output the number
	//default is decimal

	var num = 10;
	alert(num.toString()); 	// "10"
 	alert(num.toString(2));	// "1010" - binary
	alert(num.toString(8));	// "12" - octal
	alert(num.toString(10));// "10" - decimal
	alert(num.toString(16));// "a" - hexidecimal

		//default is the same as providing radix 10 (decimal)

	//use String() casting method to ensure that a string is returned even if value is null or undefined

	var value1 = 10;
	var value2 = true;
	var value3 = null;
	var value4;

	console.log(String(value1)); //"10"
	console.log(String(value2)); //"true"
	console.log(String(value3)); //"null"
	console.log(String(value4)); //"undefined"

//Object Type

	//objects are non-specific groups of data and functionality
	//devs create instances of the Object type and add properties and/or methods to it

	var o = new Object();

	//Object type is the base from which all other objects are derived
	//All properties and mehtods of Object type are present on other specific objects

	/* Each object has the following properties and methods
	
		constructor - function used to create the object - Object() function

		hasOwnProperty(propertyName) - indicates if given property exist on the instance of the object (not prototype)
									 - specified as string - o.hasOwnProperty("name");

		isPrototypeOf(object) - Determines if an object is a prototype of another object

		propertyIsEnumerable(propName) - indicates if property can be enumerated using for-in statement
									   - property name must be a string

		toLocaleString() - Returns a string representation of the object, appropriate to the locale of the execution environment
		
		toString() - Returns a string representation of the object

		valueOf() - Returns string, number, or Boolean equivalent of object. 

	*/














