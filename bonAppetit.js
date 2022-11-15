function bonAppetit(bill, k, b) {
	let totalExceptAnnasMeal = 0;

	bill.forEach((element, i) => {
		totalSum += element;

		if (i !== k) {
			totalExceptAnnasMeal += element;
		}
	});

	let sumPerPerson = totalExceptAnnasMeal / 2;

	let diff = b - sumPerPerson;

	if (sumPerPerson >= b) {
		console.log('Bon Appetit');
	} else {
		console.log(diff);
	}
}

bonAppetit([3, 10, 2, 9], 1, 12);
bonAppetit([3, 10, 2, 9], 1, 7);
