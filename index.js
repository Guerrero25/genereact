#!/usr/bin/env node
'use strict';

const commander = require('commander')
const fs = require('fs')

function handleCreate (name, cmd) {
    let path = cmd.path || './src/components',
        pascal = pascalize(name)

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

    writeReactComponent(name, path, template)
}

function writeReactComponent (name, path, data) {
    let url = `${path}/${smallCaps(name)}.js`

    fs.writeFile(url, data, function (err) {
        if (err) throw console.log(err)
        console.log('New component created!')
    })
}

function pascalize (str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
        if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
        return match.toUpperCase();
    });
}

function smallCaps (str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
        if (+match === 0) return "_"; // or if (/\s+/.test(match)) for white spaces
        return match.toLowerCase();
    });
}

commander
    .version('1.0.0', '-v', '--version')
    .description('My own CLI app')

commander
    .command('crc <name>')
    .option('-p, --path [path]', 'Change path of component')
    .action(handleCreate)

commander.parse(process.argv)