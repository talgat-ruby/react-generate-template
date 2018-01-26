const path = require('path');
const writeFilePromise = require('./writeFilePromise');
const unlinkPromise = require('./unlinkPromise');
const checkExistance = require('./checkExistance');
const readFilePromise = require('./readFilePromise');
const checkExistanceThenWriteFile = require('./checkExistanceThenWriteFile');

const testFileCreatedName = 'test-file.created';
const templateCreated = `
Hello World!
Foo Bar
`;

const testFileNewName = 'test-file.new';
const templateNew = `
This is new File
`;

beforeAll(async () => {
	await writeFilePromise(
		path.resolve(__dirname, testFileCreatedName),
		templateCreated,
		'utf8'
	);
});

afterAll(async () => {
	await unlinkPromise(path.resolve(__dirname, testFileCreatedName));
});

describe(`create ${testFileNewName} and check it is content`, () => {
	beforeAll(async () => {
		await checkExistanceThenWriteFile(__dirname, testFileNewName, templateNew);
	});

	afterAll(async () => {
		await unlinkPromise(path.resolve(__dirname, testFileNewName));
	});

	test(`check ${testFileNewName} file is created`, async () => {
		expect(await checkExistance(__dirname, testFileNewName)).toBe(true);
	});

	test(`check ${testFileNewName} files content`, async () => {
		expect(
			await readFilePromise(path.resolve(__dirname, testFileNewName), 'utf8')
		).toBe(templateNew);
	});
});

// TODO test the console stdin

// test(`check presence of ${testFileCreatedName}`, async () => {
// 	expect(
// 		await checkExistanceThenWriteFile(
// 			__dirname,
// 			testFileCreatedName,
// 			templateNew
// 		)
// 	).toBe(false);
// });
