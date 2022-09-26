function birthdayCakeCandles(candles) {
	let highNum = 0;
	let count = 1;

	for (let i = 0; i < candles.length; i++) {
		let currentNum = candles[i];

		if (currentNum > highNum) {
			highNum = currentNum;
		} else if (highNum == currentNum) {
			count++;
		}
	}

	return count;
}
