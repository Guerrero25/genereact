const config = require('../lib/config')
const assert = require('assert')

describe('Create one component', () => {
    describe('getPathComponent', () => {
        it('return ./src/components when the value of path is not present', () => {
            assert.equal(config.getPathComponents('', 'test-component'), process.cwd() + '/src/components/test_component.js')
        })

        it('return component path when is present', () => {
            assert.equal(config.getPathComponents('src/components/test/', 'test-component'), process.cwd() + '/src/components/test/test_component.js')
        })
    })
})

