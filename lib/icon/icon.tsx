import React, { Props } from 'react';
import './import';
import './icon.scss';
import mergeClassName from '../../utils/mergeClassName'

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string
}
const Icon: React.FunctionComponent<IconProps> = ({ name, className, ...rest }) => {
    return (
        <svg className={mergeClassName('icon', className)} {...rest}>
            <use xlinkHref={`#${name}`} />
        </svg>
    )
}

export default Icon