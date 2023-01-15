function arrayManipulation(n, queries) {
	let newArr = new Array(n + 2).fill(0);

	for (let i = 0; i < queries.length; i++) {
		let [a, b, k] = queries[i];

		newArr[a] += k;
		newArr[b + 1] -= k;
	}

	let sum = 0,
		max = 0;

	for (let i = 0; i < newArr.length; i++) {
		sum += newArr[i];
		max = Math.max(max, sum);
	}
	return max;
}

// console.log(
// 	arrayManipulation(5, [
// 		[1, 2, 100],
// 		[2, 5, 100],
// 		[3, 4, 100],
// 	])
// );

console.log(
	arrayManipulation(10, [
		[1, 5, 3],
		[4, 8, 7],
		[6, 9, 1],
	])
);
