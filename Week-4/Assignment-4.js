function delayedResultPromise ( n1 , n2 , delayTime ) {
	return new Promise((resolve, reject) => {
		let result = n1 + n2 + ' (' + n1 + '+' + n2 + ')';
		setTimeout(() => {
			resolve(result);
		}, delayTime);
	});
}
delayedResultPromise(4,5,3000).then( console . log );
// 9 (4+5) will be shown in the console after 3 seconds

async function main () {
	let showResult = await delayedResultPromise(4,5,3000);	
	console.log(showResult);
}
main (); // result will be shown in the console after <delayTime> seconds	