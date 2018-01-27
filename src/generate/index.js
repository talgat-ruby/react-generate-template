const path = require('path');
const {messages} = require('../helpers/');
const configs = require('./configs');
const {configureYargs} = require('./yargs-config');

// const reactFiles = require('./react/');

(() => {
	const argv = configureYargs(require('yargs'), configs);

	console.log('\x1b[33m argv -> \x1b[0m', argv);

	// specify path
	// let pathArg = argv._[0];
	// if (!pathArg) {
	// 	throw new Error(messages.pathError);
	// } else {
	// 	pathArg = path.resolve(process.cwd(), pathArg);
	// }

	// // specify file name
	// const fileName = argv._[1];
	// if (!fileName) {
	// 	throw new Error(messages.fileNameError);
	// }

	// // type of lib
	// switch (argv.lib) {
	// 	case libs.react.name:
	// 		reactFiles(pathArg, fileName, argv);
	// 		break;
	// 	default:
	// 		throw new Error(
	// 			messages.libError(Object.values(libs).map(({name}) => name))
	// 		);
	// 		break;
	// }
})();
