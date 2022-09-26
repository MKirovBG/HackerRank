function miniMaxSum(arr) {
	let sum = 0;

	for (let i = 1; i <= arr.length; i++) {
		let currentNum = arr[i - 1];
		sum += currentNum;
	}

	const minSum = sum - Math.max(...arr);
	const bigSum = sum - Math.min(...arr);

	console.log(minSum, bigSum);
}
