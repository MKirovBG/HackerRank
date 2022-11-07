function breakingRecords(scores) {
	// length
	const length = scores.length;
	let min = 0;
	let max = 0;
	let minCount = 0;
	let maxCount = 0;
	let result = [];
	for (let i = 0; i < length; i++) {
		const currentScore = scores[i];

		if (i == 0) {
			max = currentScore;
			if (minCount == 0) {
				min = currentScore;
			} else {
				if (currentScore < min) {
					min = currentScore;
				}
			}
		} else {
			if (currentScore > max) {
				maxCount++;
				max = currentScore;
			} else {
				if (currentScore < min) {
					minCount++;
					min = currentScore;
				}
			}
		}
	}
	result = [maxCount, minCount];
	console.log(result);
}
breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);
// breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]);
// 2 4
