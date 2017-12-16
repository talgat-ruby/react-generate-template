const {templateTag} = require('../../../helpers/');

module.exports = names => templateTag`
import React from 'react';
import ReactDOM from 'react-dom';
import ${names.componentName} from './${names.fileName}';

test("adds 'hello' to 'world' equal to 'hello world'", () => {
	expect('hello' + ' ' + 'world').toBe('hello world');
});
`;
