/* import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon/icon'

ReactDOM.render(
    <React.Fragment>
        <Icon name='baidu' className='red-icon' onClick={() => { console.log('click') }} />
        <Icon name='wechat' className='blue-icon' onMouseEnter={() => {
            console.log('enter');
        }} />
    </React.Fragment>,
    document.getElementById('root')
)
 */

export { default as Icon } from './icon/icon';