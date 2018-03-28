#!/usr/bin/env node
'use strict';

const commander = require('commander')
const fs = require('fs')

const pkg = require('./package.json')
const commands = require('./lib/commands')

commander
    .version(pkg.version, '-v, --version')
    .description('CLI tools for react component')

commander
    .command('component <names...>')
    .description('Create one list of components in the path specific.')
    .option('-p, --path [path]', 'Change path of component')
    .action(commands.newsComponents)

commander.parse(process.argv)