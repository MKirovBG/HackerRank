function birthday(s, d, m) {
	// Write your code here
	let answer = 0;

	let sMap = s.map((elem, index) => s.slice(index, index + m));

	let mapper = sMap.map((item) => {
		return item.reduce((a, b) => {
			return a + b;
		});
	});

	for (let i = 0; i < mapper.length; i++) {
		if (mapper[i] === d) {
			answer++;
		}
	}

	return answer;
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2));
