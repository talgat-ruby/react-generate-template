const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const {mkdirPromise, nameGenerator, userInteraction} = require('>/helpers');
const makeTemplate = require('./templates');

async function generateTemplateDest(dest, folderName) {
	try {
		const newDest = path.join(dest, folderName);
		if (fs.existsSync(newDest)) {
			const answer = userInteraction(
				`There is a folder ${chalk.yellow(
					folderName
				)}. Create files inside of it?`
			);
			if (!answer) {
				throw new Error('Directory already exists. Please remove or rename it');
			}
		} else {
			await mkdirPromise(newDest);
		}
		return newDest;
	} catch (e) {
		return Promise.reject(e);
	}
}

async function generate({dest, name, type, include = [], ...args}) {
	try {
		console.log('\x1b[33m include -> \x1b[0m', include);
		if (!fs.existsSync(dest)) {
			throw new Error('Destination does not exists');
		}
		const names = nameGenerator(name);
		const fileName = names[args.convention];

		const templData = {names, include};
		if (args.noDest) {
			const templateGen = makeTemplate(dest, fileName, [
				'component',
				...include
			]);
			await templateGen[type](templData);
		} else {
			const templateDest = await generateTemplateDest(dest, fileName);
			const templateGen = makeTemplate(templateDest, fileName, [
				'index',
				'component',
				...include
			]);
			await templateGen[type](templData);
		}
	} catch (e) {
		console.error(e.stack);
	}
}

module.exports = generate;
