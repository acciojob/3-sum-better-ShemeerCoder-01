function threeSum(arr, target) {
// write your code here
	arr.sort(function(a,b){return a-b;});
	var sum = 0;
	for (let i = 0; i < (arr.length) - 2 ; i++) {
		sum = arr[i] + arr[i+1] + arr[i+2];
		if (sum === target || sum - 1 === target || sum + 1 === target) {
			return sum;
		}else{
			sum = 0;
		}
	}
  
}

module.exports = threeSum;
