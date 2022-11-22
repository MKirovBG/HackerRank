function pageCount(n, p) {
	let totalPages = n;
	let pageToFind = p;

	let start = 1;
	let count = 3;

	if (pageToFind == totalPages) {
		start = 0;
	}

	for (let i = 1; i <= totalPages; i++) {
		if (i == 3) {
			count--;
		}
		if (i % count == 0) {
			start++;
			if (i == pageToFind) {
				break;
			}
		}

		if (i == pageToFind) {
			break;
		}
	}

	// from end

	let end = 0;
	count = 3;

	for (let i = totalPages; i >= 1; i--) {
		if (
			totalPages == pageToFind ||
			(totalPages - 1 == pageToFind && totalPages % 2 !== 0)
		) {
			end = 0;
			break;
		}

		if (i == totalPages - 2) {
			count--;
		}

		if (i % count == 0) {
			end++;
		}

		if (i == pageToFind) {
			if (totalPages % 2 !== 0 && pageToFind % 2 == 0) {
				end--;
			}
			break;
		}
	}

	if (start < end) {
		console.log(start, 'Start');
	} else {
		console.log(end, 'End');
	}
}
pageCount(6, 5);
pageCount(6, 2);
pageCount(5, 4);
pageCount(1, 1);
pageCount(7, 3);
pageCount(5809, 2668);
pageCount(18183, 18042);
