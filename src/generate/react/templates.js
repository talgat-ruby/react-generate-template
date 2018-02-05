const Handlebars = require('handlebars');
const classPaths = require('./class/');
const {TYPES, POSTFIXES} = require('./constants');
const {readFilePromise, checkExistanceThenWriteFile} = require('>/helpers');

async function compileTemplate(filePath) {
	try {
		const template = await readFilePromise(filePath, 'utf8');
		return Handlebars.compile(template);
	} catch (e) {
		return Promise.reject(e);
	}
}

const generateTemplate = paths => (
	dest,
	fileName,
	filesList
) => async templateOptions => {
	try {
		for (const f of filesList) {
			const template = await compileTemplate(paths[f]);
			const parsedTemplate = template(templateOptions);

			const postfix = POSTFIXES[f];
			const file = postfix ? `${fileName}.${postfix}` : 'index.js';

			await checkExistanceThenWriteFile(dest, file, parsedTemplate);
		}
	} catch (e) {
		return Promise.reject(e);
	}
};

const PATHS = {
	[TYPES.CLASS]: generateTemplate(classPaths),
	[TYPES.PURE]: null,
	[TYPES.FUNCTIONAL]: null
};

const makeTemplate = (dest, fileName, filesList) =>
	Object.entries(PATHS).reduce(
		(acc, [key, path]) =>
			path ? {...acc, [key]: path(dest, fileName, filesList)} : acc,
		{}
	);

module.exports = makeTemplate;
