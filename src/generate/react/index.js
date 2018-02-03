const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const {mkdirPromise, nameGenerator} = require('>/src/helpers');

// const {react: {types}, options} = require('../arguments');
// const {messages, nameGenerator} = require('../../helpers/');
// const {mkdirMiddleware} = require('../../middlewares');
// const {generateTemplates} = require('./templates');

// const classTemplates = require('./class/');
// const pureTemplates = require('./pure/');
// const functionTemplates = require('./function/');

// // specify type
// module.exports = (path, fileName, {type, include = '', ...opts}) => {
// 	const names = nameGenerator(fileName);
// 	const includeList = include.split(',');
// 	const wrapper = templates =>
// 		opts[options.NO_DIR.key]
// 			? generateTemplates(templates)(path, names, includeList, opts)
// 			: mkdirMiddleware(generateTemplates(templates))(
// 					path,
// 					names,
// 					includeList,
// 					opts
// 				);

// 	switch (type) {
// 		case types.CLASS:
// 			wrapper(classTemplates);
// 			break;
// 		case types.PURE:
// 			wrapper(pureTemplates);
// 			break;
// 		case types.FUNCTION:
// 			wrapper(functionTemplates);
// 			break;
// 		default:
// 			throw new Error(messages.typeError(types));
// 			break;
// 	}
// };

async function generateTemplateDest(dest, folderName) {
	try {
		const newDest = path.join(dest, folderName);
		if (fs.existsSync(newDest)) {
			throw new Error(
				`There is the folder ${chalk.yellow(
					folderName
				)}, please remove it, otherwise directory can not generated`
			);
		} else {
			await mkdirPromise(newDest);
			return newDest;
		}
	} catch (e) {
		return Promise.reject(e);
	}
}

async function generate({dest, name, convention, ...args}) {
	try {
		if (!fs.existsSync(dest)) {
			throw new Error('Destination does not exists');
		}
		const names = nameGenerator(name);
		const fileName = names[convention];

		const templateDest = args['no-dir']
			? dest
			: await generateTemplateDest(dest, fileName);
	} catch (e) {
		console.error(e.stack);
	}
}

module.exports = generate;
