const {includes} = require('../../arguments').react;
const {templateTag} = require('../../../helpers/');

module.exports = (names, list) => templateTag`
${list.includes(includes.flow) && '// @flow'}
import ${names.componentName} from './${names.fileName}';
${list.includes(includes.flow) &&
	`import type {Props} from './${names.fileName}.flow';`}

export default ${names.componentName};
${list.includes(includes.flow) && 'export type {Props};'}
`;
