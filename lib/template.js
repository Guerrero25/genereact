const fs = require('fs')
const st = require('string-template')
const path= require('path')

module.exports = {
    getCompileTemplate: data => {
        let template = fs.readFileSync(path.join(__dirname, '../template.txt'), 'utf8')

        return st(template, data)
    }
}