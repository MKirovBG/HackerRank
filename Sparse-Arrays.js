function matchingStrings(stringList, queries) {
	let result = [];

	for (let i = 0; i < queries.length; i++) {
		let comparingStr = queries[i];
		let counter = 0;
		for (let j = 0; j < stringList.length; j++) {
			let str = stringList[j];
			if (comparingStr == str) {
				counter++;
			}
		}
		result.push(counter);
	}
	return result;
}

console.log(
	matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab'])
);
