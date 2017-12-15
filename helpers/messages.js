/* eslint-disable */
const chalk = require('chalk');

function joinPossibleValues(values) {
	if (typeof values === 'string') {
		return values;
	} else if (Array.isArray(values)) {
		return values.join(', ');
	} else if (Boolean(values) && typeof values === 'object') {
		return Object.values(values).join(', ');
	}
}

const pathError = `
	${chalk.red('path was not specified, specify it like:')}
	${chalk.green(`yarn generate ${chalk.blue('PATH')}`)}
`;

const fileNameError = `
	${chalk.red('file name was not specified, specify it like:')}
	${chalk.green(`yarn generate PATH ${chalk.blue('FILE_NAME')}`)}
`;

const libError = possibleValues => `
	${chalk.red('lib is incorrect or was not defined, define it like:')}
	${chalk.green(`yarn generate PATH FILE_NAME --lib=${chalk.blue('LIB')}`)}
	possible-values: ${chalk.yellow(joinPossibleValues(possibleValues))}
`;

const typeError = possibleValues => `
	${chalk.red('type is incorrect or was not defined, define it like:')}
	${chalk.green(
		`yarn generate PATH FILE_NAME --lib=LIB --type=${chalk.blue('TYPE')}`
	)}
	possible-values: ${chalk.yellow(joinPossibleValues(possibleValues))}
`;

const includeMessage = possibleValues => `
	${chalk.bold('Optional param to include additional files:')}
	${chalk.green(
		`yarn generate PATH FILE_NAME --lib=LIB --type=TYPE --include=${chalk.blue(
			'INCLUDES'
		)}`
	)}
	values(could be several and have to be added after comma without spaces):
	${chalk.yellow(joinPossibleValues(possibleValues))}
`;

module.exports = {
	pathError,
	fileNameError,
	libError,
	typeError,
	includeMessage
};
