function aVeryBigSum(ar) {
	let result = 0;

	for (let i = 0; i < ar.length; i++) {
		let currentNum = ar[i];

		result += currentNum;
	}
	return BigInt(result);
}
