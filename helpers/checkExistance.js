/* eslint-disable */
const readdirPromise = require('./readdirPromise');

const checkExistance = async (path, fileName) => {
	const filesList = await readdirPromise(path);
	return filesList.includes(fileName);
};

module.exports = checkExistance;
