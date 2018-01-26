const util = require('util');
const fs = require('fs');

const checkExistance = require('./checkExistance');
const checkExistanceThenWriteFile = require('./checkExistanceThenWriteFile');
const messages = require('./messages');
const nameGenerator = require('./nameGenerator');
const {pipe, reversePipe} = require('./pipe');
const templateTag = require('./templateTag');

module.exports = {
	checkExistance,
	checkExistanceThenWriteFile,
	messages,
	nameGenerator,
	pipe,
	reversePipe,
	templateTag,
	mkdirPromise: util.promisify(fs.mkdir),
	readFilePromise: util.promisify(fs.readFile),
	readdirPromise: util.promisify(fs.readdir),
	statPromise: util.promisify(fs.stat),
	unlinkPromise: util.promisify(fs.unlink),
	writeFilePromise: util.promisify(fs.writeFile)
};
