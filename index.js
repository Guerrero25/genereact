#!/usr/bin/env node
'use strict';

const commander = require('commander')
const fs = require('fs')
const str = require('./lib/string')
const config = require('./lib/config')

const pkg = require('./package.json');

function handleCreate (name, cmd) {
    let path = config.getPathComponents(cmd.path, name),
        pascal = str.pascalize(name)    

    let template = `import React, {Component} from 'react'\n\n` +
    `class ${pascal} extends Component {\n\t` +
        `constructor (props) {\n\t` +
            '\tsuper(props)\n' +
        '\t}\n\n' +
        '\trender () {\n\t' +
            `\treturn <h1>New component ${pascal} </h1>\n` +
        '\t}\n\n' +
    '}\n\n' +
    `export default ${pascal}`

    writeReactComponent(path, template)
}

function writeReactComponent (path, data) {
    fs.writeFile(url, data, function (err) {
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