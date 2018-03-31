const fs = require('fs')
const path = require('path')
const _ = require('lodash')

module.exports = {
    getCurrentDirctoryBase: () => {
        return process.cwd()
    },

    constructPathComponent: (directoryPath, name) => {
        return path.join(path.normalize(directoryPath), _.snakeCase(name) + '.js' )
    },

    directoryExist: filePath => {
        try {
            return fs.statSync(filePath).isDirectory()
        } catch (err) {
            return false
        }
    },

    join: (path1, path2) => {
        return path.join(path1, path2)
    },

    writeReactComponent: (path, data) => {
        fs.writeFile(path, data, function (err) {
            if (err) throw console.log(err)
            console.log('New component created!')
        })
    }
}