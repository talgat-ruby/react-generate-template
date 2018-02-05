const path = require('path');
const chalk = require('chalk');
const userInteraction = require('./userInteraction');
const {writeFilePromise, openPromise} = require('./promisified-modules');

const checkExistanceThenWriteFile = async (dest, fileName, template) => {
	const filePath = path.join(dest, fileName);
	try {
		await openPromise(filePath, 'wx');
		await writeFilePromise(filePath, template);
	} catch (e) {
		if (e.code === 'EEXIST') {
			const answer = userInteraction(
				`File ${chalk.yellow(fileName)} already exists. Replace it?`
			);
			if (answer) {
				return writeFilePromise(filePath, template);
			}
		} else {
			return Promise.reject(e);
		}
	}
};

module.exports = checkExistanceThenWriteFile;
