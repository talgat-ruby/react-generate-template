const {react: {includes}, options} = require('../arguments');
const {checkExistanceThenWriteFile, messages} = require('../../helpers/');

exports.generateTemplates = templates => async (path, names, list, opts) => {
	console.info(messages.includeMessage(includes));

	const promises = [];

	if (!opts[options.NO_DIR.key]) {
		promises.push(
			checkExistanceThenWriteFile(
				path,
				'index.js',
				templates.index(names, list)
			)
		);
	}

	promises.push(
		checkExistanceThenWriteFile(
			path,
			`${names.fileName}.js`,
			templates.component(names, list)
		)
	);

	if (list.includes(includes.css)) {
		promises.push(
			checkExistanceThenWriteFile(
				path,
				`${names.fileName}.css`,
				templates[includes.css](names, list)
			)
		);
	}

	if (list.includes(includes.test)) {
		promises.push(
			checkExistanceThenWriteFile(
				path,
				`${names.fileName}.test.js`,
				templates[includes.test](names, list)
			)
		);
	}

	if (list.includes(includes.flow)) {
		promises.push(
			checkExistanceThenWriteFile(
				path,
				`${names.fileName}.flow.js`,
				templates[includes.flow](names, list)
			)
		);
	}

	return await Promise.all(promises);
};
