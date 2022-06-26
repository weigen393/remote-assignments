//Assignment 3.1 O(n^2)
function count ( input ) {
	const countCharacter = {};	
	let check = [];	// check if search before
	let countEach = 0;
	for ( let i = 0; i < input.length; i++ ) {
		countEach = 0;
		var target = input[i];
		if ( check[i] !== 1 ) {
			// count target through the rest of the array
			for ( let j = i; j < input.length; j++ ) {			
				if ( target === input[j] ) {					
					countEach++;
					check[j] = 1;					
				}			
			}
			countCharacter[input[i]] = countEach;
		}			
	}
	return countCharacter;
}

//Assignment 3.1 O(n)
function count ( input ) {
	const countCharacter = {};
	for ( let i = 0; i < input.length; i++ ) {		
		// did it appear before
		if ( countCharacter[input[i]] >= 1 ){
			countCharacter[input[i]] += 1;			
		}else {					
			countCharacter[input[i]] = 1;								
		}		
	}
	return countCharacter;
}
let input1 = [ "a" , "b" , "c" , "a" , "c" , "a" , "x" ];
console . log ( count ( input1 ));
// should print {a:3, b:1, c:2, x:1}

//Assignment 3.2 O(n^2)
function groupByKey ( input ) {
	const countCharacter = {};	
	let check = [];	// check if search before
	let sum = 0;	
	for ( let i = 0; i  < input.length; i++ ) {
		sum = 0;
		var target = input[i].key;
		if ( check[i] !== 1 ) {
			// add target value through the rest of the array
			for ( let j = i; j < input.length; j++ ) {			
				if ( target === input[j].key ) {					
					sum += input[j].value;
					check[j] = 1;					
				}			
			}
			countCharacter[input[i].key] = sum;
		}			
	}
	return countCharacter;
}

//Assignment 3.2 O(n)
function groupByKey ( input ) {
	const countCharacter = {};
	for ( let i = 0; i < input.length; i++ ) {		
		// did it appear before
		if ( !countCharacter[input[i].key] ){			
			countCharacter[input[i].key] = input[i].value;		
		}else {
			countCharacter[input[i].key] += input[i].value;
		}		
	}
	return countCharacter;
}

let input2 = [
{ key: "a" , value: 3 },
{ key: "b" , value: 1 },
{ key: "c" , value: 2 },
{ key: "a" , value: 3 },
{ key: "c" , value: 5 },
];
console . log ( groupByKey ( input2 ));
// should print {a:6, b:1, c:7}