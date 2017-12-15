/* eslint-disable */
const crypto = require('crypto');

module.exports = fileName => {
	const hash = crypto.randomBytes(8).toString('hex');

	const componentName = fileName
		.split('-')
		.map(part => `${part.slice(0, 1).toUpperCase()}${part.slice(1)}`)
		.join('');
	const styleName = `${fileName}__${hash}`;

	return {fileName, componentName, styleName};
};
