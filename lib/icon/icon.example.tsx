import Icon from './icon';
import React from 'react';

const IconExample: React.FunctionComponent = () => {
    return (
        <React.Fragment>
            <Icon name='baidu' className='red-icon' onClick={() => { console.log('click') }} />
            <Icon name='wechat' className='blue-icon' onMouseEnter={() => {
                console.log('enter');
            }} />
        </React.Fragment>
    )
}
export default IconExample;