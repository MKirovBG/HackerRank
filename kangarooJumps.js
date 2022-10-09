function kangaroo(x1, v1, x2, v2) {
	let jumpSeq1 = x1;
	let jumpSeq2 = x2;

	let jump1 = v1;
	let jump2 = v2;

	// kangaroo One
	let x1JumpCount = 0;
	let kangarooOne = [jump1];
	function firstKangarooSeq() {
		x1JumpCount++;
		for (let i = 0; i < 1; i++) {
			jumpSeq1 += jump1;
			kangarooOne.push(jumpSeq1);
		}
	}

	// kangaroo Two
	let x2JumpCount = 0;
	let kangarooTwo = [jumpSeq2];
	function secondKangarooSeq() {
		x2JumpCount++;
		for (let k = 0; k < 1; k++) {
			jumpSeq2 += jump2;
			kangarooTwo.push(jumpSeq2);
		}
	}

	let finishRule = false;
	// let stopWatch = false;

	while (!finishRule) {
		// second kangaroo start when the first has bigger num
		let secSeqStart = jumpSeq1 > jumpSeq2 ? true : false;
		if (secSeqStart) {
			secondKangarooSeq(jumpSeq2, jump2, x2JumpCount);
			firstKangarooSeq(jumpSeq1, jump1, x1JumpCount);
		} else {
			firstKangarooSeq(jumpSeq1, jump1, x1JumpCount);
		}

		// console.log(kangarooOne, kangarooTwo, x1JumpCount, x1JumpCount);
		for (let j = 0; j < kangarooOne.length; j++) {
			let kangaroo1 = kangarooOne[j];
			let kangaroo2 = kangarooTwo[j];
			// if both jumps are landing on same number return true
			finishRule = kangaroo1 === kangaroo2 ? true : false;
			if (finishRule) {
				// console.log(`YES`);
				return `YES`;
			}
		}
		let totalJumpsMade = x1JumpCount + x2JumpCount;
		if (totalJumpsMade >= 5000) {
			console.log(`NO`);
			return `NO`;
		}
	}
}

// kangaroo(0, 3, 4, 2);
// kangaroo(0, 2, 5, 3);
// kangaroo(14, 4, 98, 2);
kangaroo(21, 6, 47, 3);

/*
		firstKangarooSeq(jumpSeq1);

		//second kangaroo start when the first has bigger num
		let secSeqStart = jumpSeq1 > jumpSeq2 ? true : false;

		while (secSeqStart) {
			secondKangarooSeq(jumpSeq2);
			// if both jumps are landing on same number return true
			finishRule = jumpSeq1 === jumpSeq2 ? true : false;
			if (finishRule) {
				console.log(`YES`);
				break;
			}
			stopWatch = x1JumpCount > 40 && x2JumpCount > 40 ? true : false;
			if (stopWatch) {
				console.log(`NO`);
				break;
			}
			// firstKangarooSeq(jumpSeq1);
		}

		if (stopWatch) {
			break;
		}
*/
