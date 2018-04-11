const config = require('../lib/config')
const expect = require('chai').expect

describe('Test config module', () => {
    describe('getPathComponent', () => {
        it('return ./src/components when the value of path is not present', () => {
            expect(config.getPathComponents('', 'test-component')).to.be.a('string')
            expect(config.getPathComponents('', 'test-component')).to.equal(process.cwd() + '/src/components/test_component.js')
        })

        it('return component path when is present', () => {
            expect(config.getPathComponents('src/components/test/', 'test-component')).to.be.a('string')
            expect(config.getPathComponents('src/components/test/', 'test-component')).to.equal(process.cwd() + '/src/components/test/test_component.js')
        })
    })
})

