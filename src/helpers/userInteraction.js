const readline = require('readline-sync');
const chalk = require('chalk');

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

const userInteraction = question => {
	const parsedQuestion = `${question} (Y)es or (N)o: `;
	const answer = readline.question(parsedQuestion);

	switch (answer.toLowerCase()) {
		case ANSWERS.AFFIRMATIVE.full:
		case ANSWERS.AFFIRMATIVE.short:
			return true;
		case ANSWERS.DISSENTING.full:
		case ANSWERS.DISSENTING.short:
			return false;
		default:
			console.log(
				`Only ${chalk.yellow('(Y)es')} or ${chalk.yellow(
					'(N)o'
				)} answers are acceptable`
			);
			return userInteraction(question);
	}
};

module.exports = userInteraction;
