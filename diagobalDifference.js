function diagonalDifference(arr) {
	//store the left result
	let leftRes = 0;
	//store the right result
	let rightRes = 0;

	let ar1 = arr[0];
	let ar2 = arr[1];
	let ar3 = arr[2];

	for (let index = 0; index < arr.length; index++) {
		let firstNum = 0;
		let middleNum = 0;
		let lastFist = 0;

		if (index == 0) {
			firstNum = ar1[index];
		} else if (index == 1) {
			middleNum = ar2[index];
		} else if (index == arr.length - 1) {
			lastFist = ar3[index];
		}

		leftRes += firstNum + middleNum + lastFist;
	}

	for (let index = arr.length - 1; index >= 0; index--) {
		// first and the last
		let firstNum = 0;
		let middleNum = 0;
		let lastFist = 0;

		if (index == arr.length - 1) {
			lastFist = ar1[index];
		} else if (index == 1) {
			middleNum = ar2[index];
		} else if (index == 0) {
			firstNum = ar3[index];
		}

		rightRes += firstNum + middleNum + lastFist;
	}
	return Math.abs(leftRes - rightRes);
}
