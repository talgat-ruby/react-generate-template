const path = require('path');
const {INCLUDES} = require('../constants');

const PATHS = {
	index: path.resolve(__dirname, 'index.handlebars'),
	component: path.resolve(__dirname, 'component.handlebars'),
	[INCLUDES.CSS]: path.resolve(__dirname, 'css.handlebars'),
	[INCLUDES.FLOW]: path.resolve(__dirname, 'flow.handlebars'),
	[INCLUDES.JEST]: path.resolve(__dirname, 'jest.handlebars')
};
module.exports = PATHS;
