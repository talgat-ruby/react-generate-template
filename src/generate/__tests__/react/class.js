const path = require('path');
const util = require('util');
const rimraf = util.promisify(require('rimraf'));
const exec = util.promisify(require('child_process').exec);
const {
	mkdirPromise,
	readFilePromise,
	readdirPromise,
	unlinkPromise
} = require('../../../helpers/');

const folderName = 'test-dir';
const fileName = 'test-component';
const mainDir = path.resolve(__dirname, folderName);
const componentDir = path.resolve(mainDir, fileName);

const realCom = `node ${path.resolve(__dirname, '../../index.js')}`;
const showCom = 'react-generate-template';
const com = {
	simple: `${mainDir} ${fileName} --lib=react --type=class`,
	withTest: `${mainDir} ${fileName} --lib=react --type=class --include=test`,
	withFlow: `${mainDir} ${fileName} --lib=react --type=class --include=test,flow`,
	withRedux: `${mainDir} ${fileName} --lib=react --type=class --include=test,redux`,
	withFlowAndRedux: `${mainDir} ${fileName} --lib=react --type=class --include=test,redux,flow`,
	withFlowAndReduxNoFolder: `${mainDir} ${fileName} -d --lib=react --type=class --include=test,redux,flow`
};

beforeEach(async () => {
	await rimraf(mainDir);
	await mkdirPromise(mainDir);
});

afterEach(async () => {
	await rimraf(mainDir);
});

test(`test the command  $ ${showCom} ${com.simple}`, async () => {
	await exec(`${realCom} ${com.simple}`);

	const files = await readdirPromise(componentDir);
	const data = JSON.stringify(
		await Promise.all(
			files.map(name =>
				readFilePromise(path.resolve(componentDir, name), 'utf8')
			)
		)
	);

	expect(data).toMatchSnapshot();
});

test(`test the command  $ ${showCom} ${com.withTest}`, async () => {
	await exec(`${realCom} ${com.withTest}`);

	const files = await readdirPromise(componentDir);
	const data = JSON.stringify(
		await Promise.all(
			files.map(name =>
				readFilePromise(path.resolve(componentDir, name), 'utf8')
			)
		)
	);

	expect(data).toMatchSnapshot();
});

test(`test the command  $ ${showCom} ${com.withFlow}`, async () => {
	await exec(`${realCom} ${com.withFlow}`);

	const files = await readdirPromise(componentDir);
	const data = JSON.stringify(
		await Promise.all(
			files.map(name =>
				readFilePromise(path.resolve(componentDir, name), 'utf8')
			)
		)
	);

	expect(data).toMatchSnapshot();
});

test(`test the command  $ ${showCom} ${com.withRedux}`, async () => {
	await exec(`${realCom} ${com.withRedux}`);

	const files = await readdirPromise(componentDir);
	const data = JSON.stringify(
		await Promise.all(
			files.map(name =>
				readFilePromise(path.resolve(componentDir, name), 'utf8')
			)
		)
	);

	expect(data).toMatchSnapshot();
});

test(`test the command  $ ${showCom} ${com.withFlowAndRedux}`, async () => {
	await exec(`${realCom} ${com.withFlowAndRedux}`);

	const files = await readdirPromise(componentDir);
	const data = JSON.stringify(
		await Promise.all(
			files.map(name =>
				readFilePromise(path.resolve(componentDir, name), 'utf8')
			)
		)
	);

	expect(data).toMatchSnapshot();
});

test(
	`test the command  $ ${showCom} ${com.withFlowAndReduxNoFolder}`,
	async () => {
		await exec(`${realCom} ${com.withFlowAndReduxNoFolder}`);

		const files = await readdirPromise(mainDir);
		const data = JSON.stringify(
			await Promise.all(
				files.map(name => readFilePromise(path.resolve(mainDir, name), 'utf8'))
			)
		);

		expect(data).toMatchSnapshot();
	},
	10000
);
