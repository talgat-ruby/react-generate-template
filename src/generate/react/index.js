const {libs: {react: {types}}, options} = require('../arguments');
const {messages, nameGenerator} = require('../../helpers/');
const {mkdirMiddleware} = require('../../middlewares');
const {generateTemplates} = require('./templates');

const classTemplates = require('./class/');
const pureTemplates = require('./pure/');
const functionTemplates = require('./function/');

// specify type
module.exports = (path, fileName, {type, include = '', ...opts}) => {
	const names = nameGenerator(fileName);
	const includeList = include.split(',');
	const wrapper = templates =>
		opts[options.NO_DIR.key]
			? generateTemplates(templates)(path, names, includeList, opts)
			: mkdirMiddleware(generateTemplates(templates))(
					path,
					names,
					includeList,
					opts
				);

	switch (type) {
		case types.CLASS:
			wrapper(classTemplates);
			break;
		case types.PURE:
			wrapper(pureTemplates);
			break;
		case types.FUNCTION:
			wrapper(functionTemplates);
			break;
		default:
			throw new Error(messages.typeError(types));
			break;
	}
};
