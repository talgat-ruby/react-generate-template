const chalk = require('chalk');
const nameGenerator = require('./nameGenerator');
const {NAME_CONVENTIONS} = require('>/constants');

const testName = 'file-name';
const expectedNames = {
	[NAME_CONVENTIONS.KEBAB_CASE]: 'file-name',
	[NAME_CONVENTIONS.UPPER_CAMEL_CASE]: 'FileName',
	[NAME_CONVENTIONS.LOWER_CAMEL_CASE]: 'fileName',
	[NAME_CONVENTIONS.SNAKE_CASE]: 'file_name'
};

const testName2 = 'file';
const expectedNames2 = {
	[NAME_CONVENTIONS.KEBAB_CASE]: 'file',
	[NAME_CONVENTIONS.UPPER_CAMEL_CASE]: 'File',
	[NAME_CONVENTIONS.LOWER_CAMEL_CASE]: 'file',
	[NAME_CONVENTIONS.SNAKE_CASE]: 'file'
};

test(`check names for - ${chalk.yellow(testName)}`, () => {
	const names = nameGenerator(testName);

	expect(names).toEqual(expectedNames);
});

test(`check names for - ${chalk.yellow(testName2)}`, () => {
	const names = nameGenerator(testName2);

	expect(names).toEqual(expectedNames2);
});
