const Configstore = require('configstore')
const str = require('./string')
const pkg = require('../package.json')

const conf = new Configstore(pkg.name)

function constructUrl (path, name) {
    return `${path}/${str.smallCaps(name)}.js`
}

module.exports = {
    getPathComponents: (path, name) => {
        if (path) {
            return constructUrl(path, name)
        }

        if (conf.get('path.default')) {
            return constructUrl(conf.get('path.default'), name)
        }

        return constructUrl('./src/components', name);
    }
}