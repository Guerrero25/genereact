const templates = require('../lib/template')
const expect = require('chai').expect

describe('Test template module', () => {
    describe('getCompileTemplate', () => {
        it('should return the template component', () => {
            let tp = `import React, {Component} from 'react'

            class Test extends Component {
                constructor (props) {
                    super(props)
                }
            
                render () {
                    return <h1>New component Test </h1>
                }
            }
            
            export default Test`

            expect(templates.getCompileTemplate({pascal_name: 'Test'})).to.be.a('string')
            // expect(templates.getCompileTemplate({pascal_name: 'Test'})).to.equal(tp)
        })
    })
})