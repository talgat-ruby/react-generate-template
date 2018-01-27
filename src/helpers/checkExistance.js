const {readdirPromise} = require('./index');

const checkExistance = async (path, fileName) => {
	const filesList = await readdirPromise(path);
	return filesList.includes(fileName);
};

module.exports = checkExistance;
