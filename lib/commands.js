const config = require('./config')
const str = require('./string')
const templates = require('./template')
const files = require('./files')

module.exports = {
    newsComponents: (names, cmd) => {
        names.forEach(name => {
            let path = config.getPathComponents(cmd.path, name),
                data = {
                    pascal_name: str.pascalize(name)
                }
    
            let template = templates.getCompileTemplate(data)
    
            files.writeReactComponent(path, template)
        })
    }
}