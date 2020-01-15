import React, { Props } from 'react';
import './import';
import './icon.scss';

interface IconProps {
    name: String
}
const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        <svg className = 'icon'>
            <use xlinkHref={`#${props.name}`} style={{ 'fill': 'pink' }} />
        </svg>
    )
}

export default Icon