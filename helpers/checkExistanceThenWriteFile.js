/* eslint-disable */
const readline = require('readline-sync');
const chalk = require('chalk');
const writeFilePromise = require('./writeFilePromise');
const checkExistance = require('./checkExistance');

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

const checkExistanceThenWriteFile = async (path, fileName, template) => {
	const isExist = await checkExistance(path, fileName);
	if (isExist) {
		const answer = userInteraction(fileName);
		if (answer) {
			return writeFilePromise(`${path}/${fileName}`, template);
		}
	} else {
		return writeFilePromise(`${path}/${fileName}`, template);
	}
};

module.exports = checkExistanceThenWriteFile;
