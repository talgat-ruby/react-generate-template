/* eslint-disable */
const chalk = require('chalk');

module.exports = (strings, ...variables) => {
	let template = '';

	const len = variables.length;
	for (let i = 0; i < len; i++) {
		const string = strings[i];
		const variable = variables[i];
		const isFalse = typeof variable === 'boolean' && !variable;
		const doesTakeLine =
			string[string.length - 1] === '\n' && strings[i + 1][0] === '\n';

		if (isFalse && doesTakeLine) {
			template += `${string.trimRight()}`;
		} else if (isFalse) {
			template += string;
		} else {
			template += `${string}${variable}`;
		}
	}

	return template.concat(strings[strings.length - 1]).slice(1);
};
