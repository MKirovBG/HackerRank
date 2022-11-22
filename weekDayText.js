function weekdayText(weekdays, num) {
	//Implement your code here
	function getText(num) {
		// console.log(num)
		let currentNum = Number(num);
		let range = currentNum >= 0 && currentNum <= 6 ? true : false;

		if (range) {
			console.log(String(weekdays[currentNum]));
			return String(weekdays[currentNum]);
		} else {
			throw new Error('Invalid weekday number');
		}
	}
	getText(num);
}

weekdayText(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], 5);
