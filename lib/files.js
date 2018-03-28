const fs = require('fs');

module.exports = {
    writeReactComponent: (path, data) => {
        fs.writeFile(path, data, function (err) {
            if (err) throw console.log(err)
            console.log('New component created!')
        })
    }
}