#!/usr/bin/env node
console.log('Rap-n-Rhyme\n');

const program = require('commander');

program
  .arguments('<line>')
  .action((line) => require('./rapify')(line))
  .parse(process.argv)
