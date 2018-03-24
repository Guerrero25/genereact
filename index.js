#!/usr/bin/env node
'use strict';

const commander = require('commander')
const fs = require('fs')
const str = require('./lib/string')
const config = require('./lib/config')
const templates = require('./lib/template');

const pkg = require('./package.json');

function handleCreate (name, cmd) {
    let path = config.getPathComponents(cmd.path, name),
        data = {
            pascal_name: str.pascalize(name)
        }

    let template = templates.getCompileTemplate(data)

    writeReactComponent(path, template)
}

function writeReactComponent (path, data) {
    fs.writeFile(path, data, function (err) {
        if (err) throw console.log(err)
        console.log('New component created!')
    })
}

commander
    .version(pkg.version, '-v, --version')
    .description('CLI tools for react component')

commander
    .command('component <name>')
    .option('-p, --path [path]', 'Change path of component')
    .action(handleCreate)

commander.parse(process.argv)