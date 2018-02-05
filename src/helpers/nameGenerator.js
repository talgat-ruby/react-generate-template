const {NAME_CONVENTIONS} = require('>/constants');

function upperCamelCase(words) {
	return words.map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join('');
}

function lowerCamelCase(words) {
	return `${words[0]}${upperCamelCase(words.slice(1))}`;
}

function snakeCase(words) {
	return words.join('_');
}

function generateNames(name) {
	const namesArr = name.split('-');
	return {
		[NAME_CONVENTIONS.KEBAB_CASE]: name,
		[NAME_CONVENTIONS.UPPER_CAMEL_CASE]: upperCamelCase(namesArr),
		[NAME_CONVENTIONS.LOWER_CAMEL_CASE]: lowerCamelCase(namesArr),
		[NAME_CONVENTIONS.SNAKE_CASE]: snakeCase(namesArr)
	};
}
module.exports = generateNames;
