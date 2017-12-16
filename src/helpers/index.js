const checkExistance = require('./checkExistance');
const checkExistanceThenWriteFile = require('./checkExistanceThenWriteFile');
const messages = require('./messages');
const mkdirPromise = require('./mkdirPromise');
const nameGenerator = require('./nameGenerator');
const {pipe, reversePipe} = require('./pipe');
const readFilePromise = require('./readFilePromise');
const readdirPromise = require('./readdirPromise');
const statPromise = require('./statPromise');
const templateTag = require('./templateTag');
const unlinkPromise = require('./unlinkPromise');
const writeFilePromise = require('./writeFilePromise');

module.exports = {
	checkExistance,
	checkExistanceThenWriteFile,
	messages,
	mkdirPromise,
	nameGenerator,
	pipe,
	reversePipe,
	readFilePromise,
	readdirPromise,
	statPromise,
	templateTag,
	unlinkPromise,
	writeFilePromise
};
