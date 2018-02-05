const TYPES = {
	CLASS: 'class',
	PURE: 'pure',
	FUNCTIONAL: 'functional'
};
exports.TYPES = TYPES;

const INCLUDES = {
	CSS: 'css',
	FLOW: 'flow',
	JEST: 'jest',
	REDUX: 'redux'
};
exports.INCLUDES = INCLUDES;

const POSTFIXES = {
	component: 'js',
	[INCLUDES.CSS]: 'css',
	[INCLUDES.FLOW]: 'flow.js',
	[INCLUDES.JEST]: 'test.js'
};
exports.POSTFIXES = POSTFIXES;
