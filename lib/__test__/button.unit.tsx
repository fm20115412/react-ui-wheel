import rerender from 'react-test-renderer'
import Button from '../button'
import React from 'react'

describe('button', () => {
    it('这是个button', () => {
        let json = rerender.create(<Button />).toJSON()
        expect(json).toMatchSnapshot()
    })
})