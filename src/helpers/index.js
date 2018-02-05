const checkExistanceThenWriteFile = require('./checkExistanceThenWriteFile');
const nameGenerator = require('./nameGenerator');
const {pipe, reversePipe} = require('./pipe');
const registerHandlebarHelpers = require('./registerHandlebarHelpers');
const templateTag = require('./templateTag');
const userInteraction = require('./userInteraction');
const promisified = require('./promisified-modules');

module.exports = {
	checkExistanceThenWriteFile,
	nameGenerator,
	pipe,
	reversePipe,
	registerHandlebarHelpers,
	templateTag,
	userInteraction,
	...promisified
};
