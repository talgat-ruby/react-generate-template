const {readdirPromise} = require('./index');
const checkExistance = require('./checkExistance');

const testFileName = 'test-file.new';

test('check existance of file checkExistance.js', async () => {
	expect(await checkExistance(__dirname, 'checkExistance.js')).toBe(true);
});

test(`check absence of ${testFileName}`, async () => {
	expect(await checkExistance(__dirname, testFileName)).toBe(false);
});
