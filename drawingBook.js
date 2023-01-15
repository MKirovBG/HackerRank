// function pageCount(n, p) {
// 	let totalPages = n;
// 	let pageToFind = p;

// 	let start = 1;
// 	let count = 3;

// 	if (pageToFind == totalPages) {
// 		start = 0;
// 	}

// 	for (let i = 1; i <= totalPages; i++) {
// 		if (i == 3) {
// 			count--;
// 		}
// 		if (i % count == 0) {
// 			start++;
// 			if (i == pageToFind) {
// 				break;
// 			}
// 		}

// 		if (i == pageToFind) {
// 			break;
// 		}
// 	}

// 	// from end

// 	let end = 0;
// 	count = 3;

// 	for (let i = totalPages; i >= 1; i--) {
// 		if (
// 			totalPages == pageToFind ||
// 			(totalPages - 1 == pageToFind && totalPages % 2 !== 0)
// 		) {
// 			end = 0;
// 			break;
// 		}

// 		if (i == totalPages - 2) {
// 			count--;
// 		}

// 		if (i % count == 0) {
// 			end++;
// 		}

// 		if (i == pageToFind) {
// 			if (totalPages % 2 !== 0 && pageToFind % 2 == 0) {
// 				end--;
// 			}
// 			break;
// 		}
// 	}

// 	if (start < end || start == end) {
// 		return start;
// 		console.log(start, 'Start');
// 	} else {
// 		return end;
// 		console.log(end, 'End');
// 	}
// }
// pageCount(6, 5);
// pageCount(6, 2);
// pageCount(5, 4);
// pageCount(1, 1);
// pageCount(7, 3);
// pageCount(5809, 2668);
// pageCount(18183, 18042);

// function pageCount(totalPages, pageToFind) {
// 	function start(half, pageToFind) {
// 		let count = 0;
// 		count++;
// 		for (let i = 2; i <= half; i++) {
// 			if (i == pageToFind) {
// 				return count;
// 			}
// 			if (i % 2 !== 0) {
// 				count++;
// 			}
// 		}
// 	}
// 	function end(startPoint, pageToFind, totalPages) {
// 		let count = 0;

// 		for (let i = totalPages; i >= startPoint; i--) {
// 			if (i % 2 !== 0) {
// 				count++;
// 			}
// 			if (i == pageToFind) {
// 				return count;
// 			}
// 		}
// 	}

// 	if (pageToFind > 1 && pageToFind < totalPages) {
// 		const half = Math.floor(totalPages / 2);

// 		// find difference from Start & End

// 		let executeClosest = pageToFind < half ? true : false;

// 		if (executeClosest) {
// 			return start(half, pageToFind);
// 		} else {
// 			return end(half, pageToFind, totalPages);
// 		}
// 	} else {
// 		return 0;
// 	}
// }

function pageCount(n, p) {
	// Write your code here
	let result = 0;

	if (n % 2 === 0) {
		n += 1;
	}

	result = Math.floor(Math.min(p / 2, (n - p) / 2));
	return result;
}

pg;
console.log(pageCount(5, 4));
// console.log(pageCount(5, 1));
// console.log(pageCount(6, 4));
