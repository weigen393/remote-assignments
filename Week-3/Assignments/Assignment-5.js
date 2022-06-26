function twoSum (nums , target) {
	let ans = [];
	for (let i = 0; i < nums.length; i++) {
		var diff = target - nums[i];
		for (let j = i+1; j < nums.length; j++) {
			if (diff === nums[j]) {
				ans = [i,j];
			}
		}	
	}
	return ans;
}

twoSum([2, 7, 11, 15], 9);

