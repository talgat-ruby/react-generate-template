const nameGenerator = require('./nameGenerator');

const testFileName = 'foo-bar';
const testComponentName = 'FooBar';

test('check names', () => {
	const {fileName, componentName, styleName} = nameGenerator(testFileName);

	expect(fileName).toBe(testFileName);

	expect(componentName).toBe(testComponentName);

	const startIndex = styleName.indexOf(fileName);
	expect(
		styleName.slice(
			startIndex - 2,
			startIndex + testFileName.split('').length + 2
		)
	).toBe(`__${fileName}__`);
});
