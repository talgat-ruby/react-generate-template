const util = require('util');
const fs = require('fs');

module.exports = {
	mkdirPromise: util.promisify(fs.mkdir),
	readFilePromise: util.promisify(fs.readFile),
	readdirPromise: util.promisify(fs.readdir),
	statPromise: util.promisify(fs.stat),
	unlinkPromise: util.promisify(fs.unlink),
	writeFilePromise: util.promisify(fs.writeFile),
	openPromise: util.promisify(fs.open)
};
