import rerender from 'react-test-renderer'
import Icon from '../icon'
import React from 'react'
import { mount } from 'enzyme'

describe('测试icon', () => {
    it('这是个icon', () => {
        let json = rerender.create(<Icon name='wechat' />).toJSON()
        expect(json).toMatchSnapshot()
    })
    it('它可以点击', () => {

        let fn = jest.fn()
        let componnet = mount(<Icon name='baidu' onClick={fn} />)
        componnet.find('svg').simulate('click')
        expect(fn).toBeCalled()
    })
})