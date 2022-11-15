function sockMerchant(n, ar) {
	let match = 0;

	for (let i = 0; i < n; i++) {
		let currentSock = ar[i];
		let startIndex = i + 1;
		for (let j = startIndex; j < ar.length; j++) {
			let matchingSock = ar[j];

			if (currentSock == matchingSock) {
				let leftSide = ar.slice(0, j);
				let rightSide = ar.slice(j + 1);
				ar = leftSide.concat(rightSide);
				n--;
				match++;
				break;
			}
		}
	}

	console.log(match);
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
