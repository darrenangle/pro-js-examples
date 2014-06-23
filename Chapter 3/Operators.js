//Unary Operators

	//Increment / Decrement
	
		//prefixed ++ adds 1 to a numeric value
		var age = 26;
		++age; //returns 27

		// -- subtracts 1 from a numeric value
		var age = 27;
		--age; // returns 26

		//prefix is assessed before the statement is evaluated (side effect)

		var age = 29;
		var anotherAge = --age + 2;

		console.log(age); // returns 28
		console.log(anotherAge); //returns 30



