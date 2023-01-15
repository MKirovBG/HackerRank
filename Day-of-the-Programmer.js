function dayOfProgrammer(year) {
	// Write your code here
	let dates = {
		regular: `13.09.${year}`,
		leap: `12.09.${year}`,
	};

	//find which calendar to check
	//option 1 from 1700 - 1917 Julians calendar
	if (year <= 1917) {
		// Julian calendat  -> if year % 4 == 0 then the year is leap (Feb has 29 days) else regular (Feb has 28)
		let leapYear = year % 4 == 0;
		if (!leapYear) {
			//console.log(dates.regular);
			return dates.regular;
		} else {
			//console.log(dates.leap);
			return dates.leap;
		}
	}
	if (year == 1918) {
		return '26.09.1918';
	}
	// option 2 from 1918 - day after 31st Jan -> next day was 14th Feb which is the 32nd day of the year
	if (year > 1918) {
		// Gregorian calendar -> leap year has 2 states :
		// year % 4 == 0 && year % 100 !== 0
		let leapYear = year % 400 == 0 || (year % 4 == 0 && year % 100 !== 0);
		if (!leapYear) {
			//console.log(dates.regular);
			return dates.regular;
		} else {
			//console.log(dates.leap);
			return dates.leap;
		}
	}
}

console.log(dayOfProgrammer(2000));
