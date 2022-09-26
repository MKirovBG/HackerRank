function countApplesAndOranges(s, t, a, b, apples, oranges) {
	let applesPosition = [];
	let orangePosition = [];

	let appleCollected = 0;
	let orangesCollected = 0;

	for (let i = 0; i < apples.length; i++) {
		let currentDrop = apples[i];
		if (currentDrop <= 0) {
			applesPosition.push(a - Math.abs(currentDrop));
		} else {
			applesPosition.push(a + currentDrop);
		}
	}
	for (let j = 0; j < oranges.length; j++) {
		let currentDrop = oranges[j];
		if (currentDrop <= 0) {
			orangePosition.push(b - Math.abs(currentDrop));
		} else {
			orangePosition.push(b + currentDrop);
		}
	}

	for (let g = 0; g < applesPosition.length; g++) {
		let currentDropPosition = applesPosition[g];
		if (currentDropPosition >= s && currentDropPosition <= t) {
			appleCollected++;
		}
	}
	for (let f = 0; f < orangePosition.length; f++) {
		let currentDropPosition = orangePosition[f];
		if (currentDropPosition >= s && currentDropPosition <= t) {
			orangesCollected++;
		}
	}

	console.log(appleCollected);
	console.log(orangesCollected);
}
