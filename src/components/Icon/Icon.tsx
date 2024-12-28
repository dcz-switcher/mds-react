import React, { ReactNode } from "react";

const iconSizeMappingClass = {
    'xsmall'   : 16,
    'small'    : 24,
    'medium'   : 28,
    'large'    : 32,
    'xlarge'   : 40,
    'huge'     : 40,
    'enormous' : 40,
    'giant'    : 40,
};
const pictoSizeMappingClass = {
    'xsmall'   : 24,
    'small'    : 32,
    'medium'   : 40,
    'large'    : 48,
    'xlarge'   : 64,
    'huge'     : 80,
    'enormous' : 96,
    'giant'    : 160,
};


export type IconProps = {
    children?: ReactNode;
    color?: string;
    size?: 'xsmall' | 'small' | 'medium'| 'large' | 'xlarge' | 'huge' | 'enormous' | 'giant' ;
    baseClassName?: string;
    className?: string;
}

const Icon = ({
    children = "person",
    color,
    size = 'medium',
    baseClassName = "icon",
    className,
}:IconProps) => {
    const baseClass = "mds-" + baseClassName + "__";
    const sizeClass = (baseClassName == 'picto') ? "mds-picto--"+pictoSizeMappingClass[size] : "mds-icon--"+iconSizeMappingClass[size];
    return (
        <span className={` ${baseClass}${children} ${sizeClass} ${color ?  "mds-color__"+color : ''} ${className} `}></span>
    )
}

export default Icon;