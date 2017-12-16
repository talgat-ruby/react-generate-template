const {includes} = require('../../arguments').libs.react;
const {templateTag} = require('../../../helpers/');

module.exports = (names, list) => templateTag`
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
