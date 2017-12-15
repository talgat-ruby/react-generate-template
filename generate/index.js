/* eslint-disable */
const path = require('path');
const yargs = require('yargs');
const {messages} = require('../helpers/');
const {libs, options} = require('./arguments');

const reactFiles = require('./react/');

const argv = yargs
	.boolean([options.NO_DIR.name])
	.alias(options.NO_DIR.name, options.NO_DIR.alias).argv;

// specify path
let pathArg = argv._[0];
if (!pathArg) {
	throw new Error(messages.pathError);
} else {
	pathArg = path.resolve(process.cwd(), pathArg);
}

// specify file name
const fileName = argv._[1];
if (!fileName) {
	throw new Error(messages.fileNameError);
}

// type of lib
switch (argv.lib) {
	case libs.react.name:
		reactFiles(pathArg, fileName, argv);
		break;
	default:
		throw new Error(
			messages.libError(Object.values(libs).map(({name}) => name))
		);
		break;
}
