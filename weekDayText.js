function weekdayText(weekdays) {
	//Implement your code here
	return function getText(num) {
		// console.log(num)
		let currentNum = Number(num);
		let range = currentNum >= 0 && currentNum <= 6 ? true : false;

		if (range) {
			return String(weekdays[currentNum]);
		} else {
			throw new Error('Invalid weekday number');
		}
	};
}

weekdayText(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);
