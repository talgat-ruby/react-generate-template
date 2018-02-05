const Handlebars = require('handlebars');
const classPaths = require('./class/');
const {TYPES, POSTFIXES} = require('./constants');
const {readFilePromise, checkExistanceThenWriteFile} = require('>/helpers');

const PATHS = {
	[TYPES.CLASS]: getPaths(classPaths),
	[TYPES.PURE]: null,
	[TYPES.FUNCTIONAL]: null
};

async function compileTemplate(filePath) {
	try {
		const template = await readFilePromise(filePath, 'utf8');
		return Handlebars.compile(template);
	} catch (e) {
		return Promise.reject(e);
	}
}

function getPaths(paths) {
	return function generateTemplate(dest, fileName, filesList) {
		return async function test(templateOptions) {
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
	};
}

function makeTemplate(dest, fileName, filesList) {
	const obj = {};
	for (const [key, path] of Object.entries(PATHS)) {
		if (path) {
			obj[key] = path(dest, fileName, filesList);
		}
	}
	return obj;
}

module.exports = makeTemplate;
