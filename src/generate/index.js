const configs = require('./configs-data');
const {configureYargs} = require('./config');

configureYargs(require('yargs'), configs);
