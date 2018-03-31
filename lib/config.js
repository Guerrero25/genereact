const Configstore = require('configstore')
const _ = require('lodash')
const pkg = require('../package.json')
const files = require('./files')

const conf = new Configstore(pkg.name)

module.exports = {
    getPathComponents: (path, name) => {
        let current_directory = files.getCurrentDirctoryBase()

        if (path && files.directoryExist(path)) {
            return files.constructPathComponent(files.join(current_directory, path), name)
        }

        if (conf.get('path.default') && files.directoryExist(conf.get('path.default'))) {
            return files.constructPathComponent(conf.get('path.default'), name)
        }

        return files.constructPathComponent(files.join(current_directory, 'src/components'), name);
    }
}