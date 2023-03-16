function threeSum(arr, target) {
// write your code here
	arr.sort(function(a,b){return a-b;});
	for (let i = 0; i < arr.length; i++) {
		var sum = 0;
		var count = 0;
		for (let j = i; j < i ; j++) {
			sum += arr[j];
			count ++;
			if(count == 3){
				break;
			}
		}
		if (sum === target || sum - 1 === target || sum + 1 === target) {
			return sum;
		}
		
	}
  
}

module.exports = threeSum;
