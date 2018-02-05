const yargs = require('yargs');
const data = require('./configs-data');
const config = require('./config');

config(yargs, data);
