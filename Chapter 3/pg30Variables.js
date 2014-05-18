// Using var operator to define a variable makes it local to the scope in which it was defined

function local(){
	var message = "Hi";
}

local();

alert(message); // Will error out. 



function local2(){
	var message = "Hi";
	console.log(message); 
}

local2(); // prints "Hi" to console, as log contained in function scope


function global(){
	badMessage = "why?"; // global variable (bad idea!)
}

global();
console.log(badMessage); // Will log "why?" 



//Multiple Variable declarations!

var message =	"hi",
	note = 		"Is this worth it?",
	number =	9;

console.log(message, note, number); //logs all three variables 
