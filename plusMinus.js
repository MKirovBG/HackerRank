function plusMinus(arr) {
	let length = arr.length;
	let positive = 0;
	let negative = 0;
	let zero = 0;

	arr.forEach((element) => {
		if (element == 0) {
			zero++;
		} else if (element < 0) {
			negative++;
		} else {
			positive++;
		}
	});

	let positiveRes = positive / length;
	let negativeRes = negative / length;
	let zeroRes = zero / length;

	console.log(positiveRes.toPrecision(6));
	console.log(negativeRes.toPrecision(6));
	console.log(zeroRes.toPrecision(6));
}
