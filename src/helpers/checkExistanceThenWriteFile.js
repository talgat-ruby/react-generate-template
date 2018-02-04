const fs = require('fs');
const path = require('path');
const readline = require('readline-sync');
const chalk = require('chalk');
const {writeFilePromise} = require('./index');

const ANSWERS = {
	AFFIRMATIVE: {
		full: 'yes',
		short: 'y'
	},
	DISSENTING: {
		full: 'no',
		short: 'n'
	}
};

const userInteraction = fileName => {
	const answer = readline.question(
		`File ${chalk.yellow(fileName)} already exists. Replace it? (Y)es or (N)o: `
	);

	switch (answer.toLowerCase()) {
		case ANSWERS.AFFIRMATIVE.full:
		case ANSWERS.AFFIRMATIVE.short:
			return true;
		case ANSWERS.DISSENTING.full:
		case ANSWERS.DISSENTING.short:
			return false;
		default:
			return userInteraction(fileName);
	}
};

const checkExistanceThenWriteFile = (dest, fileName, template) => {
	const filePath = path.join(dest, fileName);
	if (fs.existsSync(dest)) {
		const answer = userInteraction(fileName);
		if (answer) {
			return writeFilePromise(filePath, template);
		}
	} else {
		return writeFilePromise(filePath, template);
	}
};

module.exports = checkExistanceThenWriteFile;
