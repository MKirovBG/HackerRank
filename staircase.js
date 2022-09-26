function staircase(num) {
	let space = ' ';
	let step = '#';
	for (let i = 1; i <= num; i++) {
		let spaceTaken = num - i;
		let stepsPrint = i;
		console.log(`${space.repeat(spaceTaken)}${step.repeat(stepsPrint)}`);
	}
}
