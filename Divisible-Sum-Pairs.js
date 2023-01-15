function divisibleSumPairs(n, k, ar) {
	// Write your code here
	let count = 0;
	for (let i = 0; i <= n; i++) {
		let n1 = ar[i];
		for (let j = i + 1; j <= n; j++) {
			let n2 = ar[j];
			if ((n1 + n2) % k == 0) {
				count++;
			}
		}
	}
	console.log(count);
	return count;
}

divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]);
