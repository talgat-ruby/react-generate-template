/* eslint-disable */
const {mkdirPromise, statPromise, checkExistance} = require('../helpers');

const checkIfDirectory = async (path, names) => {
	const stats = await statPromise(`${path}/${names.fileName}`);
	return stats.isDirectory();
};

module.exports = next => async (path, names, ...rest) => {
	try {
		const isAlreadyExists = await checkExistance(path, names.fileName);

		const newPath = `${path}/${names.fileName}`;

		if (isAlreadyExists) {
			const isDirectory = await checkIfDirectory(path, names);
			if (!isDirectory) {
				throw new Error(
					`There is the file ${
						names.fileName
					}, please remove it, otherwise directory can not generated`
				);
			}
		} else {
			await mkdirPromise(newPath);
		}

		return next(newPath, names, ...rest);
	} catch (e) {
		console.error(e);
	}
};
