function separateOptions(options) {
	const requiredOptions = [];
	const optionalOptions = [];
	for (const option of options) {
		if (option.require) {
			requiredOptions.push(option);
		} else {
			optionalOptions.push(option);
		}
	}
	return {requiredOptions, optionalOptions};
}

function getCommand(name, options) {
	return options.reduce((acc, {name}) => `${acc} <${name}>`, `${name}`);
}

function getParams(option) {
	const params = {description: option.description, type: option.type};
	if (option.alias) {
		Object.assign(params, {alias: option.alias});
	}
	if (option.choices) {
		Object.assign(params, {choices: option.choices});
	}
	if (option.default) {
		Object.assign(params, {default: option.default});
	}
	return params;
}

function configureYargs(yargs, configs) {
	let result = yargs.usage('$0 <command>', 'create template', yargs => {
		yargs.positional('command', {
			describe: 'command to create templates',
			type: 'string',
			choices: configs.map(({name}) => name)
		});
	});

	for (const {name, entry, description, options} of configs) {
		const {requiredOptions, optionalOptions} = separateOptions(options);
		const cmd = getCommand(name, requiredOptions);

		result = result.command(
			cmd,
			description,
			yargs => {
				let result = yargs;
				for (const option of requiredOptions) {
					result = result.positional(option.name, getParams(option));
				}
				for (const option of optionalOptions) {
					result = result.option(option.name, getParams(option));
				}
				return result;
			},
			argv => {
				require(entry)(argv);
			}
		);
	}

	return result.help().argv;
}

module.exports = configureYargs;