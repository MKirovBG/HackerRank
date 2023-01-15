function hourglassSum(arr) {
	// Write your code here
	let hourGlassSumValues = [];

	for (let i = 0; arr.length; i++) {
		if (i > 3) break;

		for (let j = 0; j < 4; j++) {
			console.log(arr[i][j]);
			let firstRow = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
			let middleRow = arr[i + 1][j + 1];
			let lastRow = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];

			let hourGlassTotal = firstRow + middleRow + lastRow;
			hourGlassSumValues.push(hourGlassTotal);
		}
	}

	let maxHourGlassSum = 0;
	for (let i = 0; i < hourGlassSumValues.length; i++) {
		if (i == 0) maxHourGlassSum = hourGlassSumValues[i];

		if (maxHourGlassSum < hourGlassSumValues[i]) {
			maxHourGlassSum = hourGlassSumValues[i];
		}
	}
	return maxHourGlassSum;
}

hourglassSum([
	[1, 1, 1, 0, 0, 0],
	[0, 1, 0, 0, 0, 0],
	[1, 1, 1, 0, 0, 0],
	[0, 0, 2, 4, 4, 0],
	[0, 0, 0, 2, 0, 0],
	[0, 0, 1, 2, 4, 0],
]);
