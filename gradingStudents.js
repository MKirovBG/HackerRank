function gradingStudents(grades) {
	let finalGrades = grades;
	for (let i = 0; i <= finalGrades.length - 1; i++) {
		let grade = finalGrades[i];
		for (let j = 0; j < 3; j++) {
			grade = (finalGrades[i] + j) / 5;
			if (finalGrades[i] + j >= 40 && grade % 1 == 0) {
				finalGrades[i] = finalGrades[i] + j;
			}
		}
	}
	return finalGrades;
}
