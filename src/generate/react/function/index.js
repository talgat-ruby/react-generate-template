const {includes} = require('../../arguments').libs.react;

const index = require('./index.tml');
const component = require('./component.tml');
const css = require('./css.tml');
const test = require('./test.tml');
const flow = require('./flow.tml');

module.exports = {
	index,
	component,
	[includes.css]: css,
	[includes.test]: test,
	[includes.flow]: flow
};
