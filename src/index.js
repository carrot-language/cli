#! /usr/bin/env node

const { program } = require('commander');
const colors = require('colors');

program
  .name('carrot')
  .description('The Official CLI for the Carrot Programming Language.')
  .version('1.0.0');

program.parse();
