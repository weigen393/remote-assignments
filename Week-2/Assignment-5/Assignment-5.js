function binarySearchPosition ( numbers , target ) {
// your code here
	let start = 0;
	let end = numbers.length - 1;
	while ( end >= start ) {
		var mid = Math.floor((end + start)/2);
		if ( target === numbers[mid] ) {
			return mid;
		}else if ( target > numbers[mid] ) {
			start = mid + 1;
		}else {
			end = mid - 1;
		}		
	}
	return -1; //not find
}
console . log ( binarySearchPosition ([ 1 , 2 , 5 , 6 , 7 ], 1 )); // should print 0
console . log( binarySearchPosition ([ 1 , 2 , 5 , 6 , 7 ], 6 )); // should print 3