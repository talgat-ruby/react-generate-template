/* eslint-disable */
const {includes} = require('../arguments').libs.react;
const {templateTag, templateExpression} = require('../../helpers/');

const index = (names, list) => templateTag`
${list.includes(includes.flow) && '// @flow'}
import ${names.componentName} from './${names.fileName}';
${list.includes(includes.flow) &&
	`import type {Props} from './${names.fileName}.flow';`}

export default ${names.componentName};
${list.includes(includes.flow) && `export type {Props};`}
`;

const component = (names, list) => templateTag`
${list.includes(includes.flow) && '// @flow'}
import React from 'react';
${list.includes(includes.redux) && "import {connect} from 'react-redux';"}
${list.includes(includes.flow) &&
	`import type {Props} from './${names.fileName}.flow';`}
${list.includes(includes.css) && `import './${names.fileName}.css';`}

const ${names.componentName} = (props: ${list.includes(includes.flow) &&
	'Props'}) => (
	<div${list.includes(includes.css) &&
		` className="${names.styleName}"`}>Hello</div>
);

${list.includes(includes.redux) && 'const mapStateToProps = state => ({});'}

${list.includes(includes.redux) && 'const mapDispatchToProps = {};'}

export default ${list.includes(includes.redux) &&
	'connect(mapStateToProps, mapDispatchToProps)('}${
	names.componentName
}${list.includes(includes.redux) && ')'};
`;

const css = names => templateTag`
.${names.styleName} {
}
`;

const test = names => templateTag`
import React from 'react';
import ReactDOM from 'react-dom';
import ${names.componentName} from './${names.fileName}';

test("adds 'hello' to 'world' equal to 'hello world'", () => {
	expect('hello' + ' ' + 'world').toBe('hello world');
});
`;

const flow = names => templateTag`
// @flow

export type Props = any;
`;

module.exports = {
	index,
	component,
	[includes.css]: css,
	[includes.test]: test,
	[includes.flow]: flow
};
