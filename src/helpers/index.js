const checkExistanceThenWriteFile = require('./checkExistanceThenWriteFile');
const messages = require('./messages');
const nameGenerator = require('./nameGenerator');
const {pipe, reversePipe} = require('./pipe');
const templateTag = require('./templateTag');
const userInteraction = require('./userInteraction');
const promisified = require('./promisified-modules');

module.exports = {
	checkExistanceThenWriteFile,
	messages,
	nameGenerator,
	pipe,
	reversePipe,
	templateTag,
	userInteraction,
	...promisified
};
