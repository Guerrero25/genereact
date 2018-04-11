const files = require('../lib/files')
const expect = require('chai').expect

describe('Test files module', () => {
    describe('getCurrentDirctoryBase', () => {
        it('should return the current directory', () => {
            expect(files.getCurrentDirctoryBase()).to.be.a('string')
            expect(files.getCurrentDirctoryBase()).to.equal(process.cwd())
        })
    })

    describe('constructPathComponent', () => {
        it('should return the component path', () => {
            expect(files.constructPathComponent('src/components', 'test')).to.be.a('string')
            expect(files.constructPathComponent('src/components', 'test')).to.equal('src/components/test.js')
        })

        it('should return the path with snakeCase', () => {
            expect(files.constructPathComponent('src/components', 'snake-test')).to.be.a('string')
            expect(files.constructPathComponent('src/components', 'snake-test')).to.equal('src/components/snake_test.js')
        })

        it('should return one coherent path', () => {
            expect(files.constructPathComponent('src//components/', 'test')).to.be.a('string')
            expect(files.constructPathComponent('src//components/', 'test')).to.equal('src/components/test.js')
        })
    })

    describe('directoryExist', () => {
        it('should be true', () => {
            expect(files.directoryExist('lib')).to.equal(true)
        })

        it('should be false', () => {
            expect(files.directoryExist('package.json')).to.equal(false)
        })
    })
})
