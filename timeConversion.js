function timeConversion(s) {
	let timeOfDay = s.slice(8, s.length);
	let min = s.slice(2, 8);
	let timeNum = s.slice(0, 2);

	let newStr = '';

	if (timeOfDay == 'PM') {
		if (timeNum == '01') {
			newStr = '13';
		} else if (timeNum == '02') {
			newStr = '14';
		} else if (timeNum == '03') {
			newStr = '15';
		} else if (timeNum == '04') {
			newStr = '16';
		} else if (timeNum == '05') {
			newStr = '17';
		} else if (timeNum == '06') {
			newStr = '18';
		} else if (timeNum == '07') {
			newStr = '19';
		} else if (timeNum == '08') {
			newStr = '20';
		} else if (timeNum == '09') {
			newStr = '21';
		} else if (timeNum == '10') {
			newStr = '22';
		} else if (timeNum == '11') {
			newStr = '23';
		} else if (timeNum == '12') {
			newStr = '12';
		}
		return newStr.concat(min);
	} else if (timeOfDay == 'AM') {
		if (timeNum == '12') {
			newStr = '00';
		} else if (timeNum == '13') {
			newStr = '01';
		} else if (timeNum == '14') {
			newStr = '02';
		} else if (timeNum == '15') {
			newStr = '03';
		} else if (timeNum == '16') {
			newStr = '04';
		} else if (timeNum == '17') {
			newStr = '05';
		} else if (timeNum == '18') {
			newStr = '06';
		} else if (timeNum == '19') {
			newStr = '07';
		} else if (timeNum == '20') {
			newStr = '08';
		} else if (timeNum == '21') {
			newStr = '09';
		} else if (timeNum == '22') {
			newStr = '10';
		} else if (timeNum == '23') {
			newStr = '11';
		} else if (timeNum == '24') {
			newStr = '12';
		} else if (Number(timeNum) < 12) {
			return s.slice(0, 8);
		}
		return newStr.concat(min);
	}
}
