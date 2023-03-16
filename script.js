function threeSum(arr, target) {
// write your code here
	arr.sort(function(a,b){return a-b;});
	for (let i = 0; i < arr.length; i++) {
		var sum = 0;
		var count = 0;
		for (let j = i; j < i + 3 ; j++) {
			sum += arr[j];
		}
		if (sum === target || sum - 1 === target || sum + 1 === target) {
			return sum;
		}
		
	}
  
}

module.exports = threeSum;
