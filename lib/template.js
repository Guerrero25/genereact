const fs = require('fs')
const st = require('string-template')

module.exports = {
    getCompileTemplate: data => {
        let template = fs.readFileSync(fs.realpathSync('template.txt'), 'utf8')

        return st(template, data)
    }
}