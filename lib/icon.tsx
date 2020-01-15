import React, { Props } from 'react';
import './import'
/* import './icons/baidu.svg';
import './icons/wechat.svg'; */
/* function Icon() {
    
} */
interface IconProps {
    name: String
}
const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <svg>
            <use xlinkHref={`#${props.name}`} style={{ 'fill': 'pink' }} />
        </svg>
    )
}

export default Icon