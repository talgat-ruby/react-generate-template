/* eslint-disable */
const mkdirPromise = require('./mkdirPromise');
const writeFilePromise = require('./writeFilePromise');
const readdirPromise = require('./readdirPromise');
const statPromise = require('./statPromise');
const nameGenerator = require('./nameGenerator');
const messages = require('./messages');
const templateTag = require('./templateTag');
const {pipe, reversePipe} = require('./pipe');
const checkExistanceThenWriteFile = require('./checkExistanceThenWriteFile');
const checkExistance = require('./checkExistance');

module.exports = {
	mkdirPromise,
	writeFilePromise,
	readdirPromise,
	statPromise,
	nameGenerator,
	messages,
	templateTag,
	pipe,
	reversePipe,
	checkExistanceThenWriteFile,
	checkExistance
};
