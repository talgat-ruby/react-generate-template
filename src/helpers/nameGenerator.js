const crypto = require('crypto');

module.exports = fileName => {
	const hashStart = crypto.randomBytes(4).toString('hex');
	const hashEnd = crypto.randomBytes(4).toString('hex');

	const componentName = fileName
		.split('-')
		.map(part => `${part.slice(0, 1).toUpperCase()}${part.slice(1)}`)
		.join('');
	const styleName = `_${hashStart}__${fileName}__${hashEnd}`;

	return {fileName, componentName, styleName};
};
