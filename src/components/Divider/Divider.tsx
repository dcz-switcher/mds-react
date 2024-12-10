import React, { HTMLAttributes } from "react";


export interface DividerProps extends HTMLAttributes<HTMLElement> {
    component?: 'hr' | 'div';
    variant?: 'thin' | 'heavy';
    reverse?: boolean;
}

const variantMappingClass = {
    thin  : 'basic',
    heavy : 'module'
}


const Divider = ({
    component = 'hr',
    variant = 'thin',
    reverse = false,
    ...props
}:DividerProps) => {
    const Tag = component;

    return (
        <Tag className={`mds-divider mds-divider--${variantMappingClass[variant]} ${reverse ? 'mds-divider--reverse': ''}`} aria-hidden="true" {...props}/>
    )
}

export default Divider;