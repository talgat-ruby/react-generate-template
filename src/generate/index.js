const yargs = require('yargs');
const data = require('./configs-data');
const config = require('./config');
const {registerHandlebarHelpers} = require('>/helpers/');

registerHandlebarHelpers();
config(yargs, data);
