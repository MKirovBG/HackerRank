function getTotalX(a, b) {
	let arrv1 = [];

	let maxNumberB = Math.max(...b);

	a.forEach((element) => {
		let tempArray = [];

		for (let i = 1; i <= 100; i++) {
			if (i % element == 0 && i <= maxNumberB) {
				tempArray.push(i);
			}
		}

		arrv1.push(tempArray);
	});

	b.forEach((elementThree) => {
		let tempArrayTwo = [];

		for (let i = 1; i <= elementThree; i++) {
			if (elementThree % i == 0) {
				tempArrayTwo.push(i);
			}
		}

		arrv1.push(tempArrayTwo);
	});

	let sortedArray = arrv1.flat(10).sort((a, b) => a - b);

	let finalArray = [];

	sortedArray.forEach((elementFour) => {
		let counter = 0;

		sortedArray.forEach((finalElement) => {
			if (elementFour == finalElement) {
				counter++;
				if (counter == a.length + b.length) {
					finalArray.push(elementFour);
				}
			}
		});
	});

	let lastResult = Array.from(new Set(finalArray));

	return lastResult.length;
}

getTotalX([2, 4], [16, 32, 96]);
