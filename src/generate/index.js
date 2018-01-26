const path = require('path');
const {messages} = require('../helpers/');
const {libs, options} = require('./arguments');

const reactFiles = require('./react/');

(() => {
	// config yarg
	const argv = require('yargs')
		.usage('$0 <path> <name> <command>', '', yargs => {
			yargs
				.positional('path', {
					describe: 'directory where insert file(s)',
					type: 'string'
				})
				.positional('name', {
					describe: 'folder name and/or filename',
					type: 'string'
				})
				.command('<path> <name> react', 'generate react template', yargs =>
					yargs.options({
						type: {
							alias: 't',
							describe: 'Type of component',
							demandOption: true,
							type: 'string',
							choices: ['class', 'pure', 'functional']
						},
						include: {
							describe: 'Include features',
							type: 'array',
							choices: ['css', 'flow', 'jest', 'redux']
						}
					})
				);
		})
		.options({
			'no-dir': {
				alias: 'n',
				describe: 'Will not create directory, will create files inside <path>',
				type: 'boolean'
			}
		})
		.help().argv;

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
