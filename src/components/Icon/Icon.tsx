import React, { ReactNode } from "react";


const sizeMappingClass = {
    'small' : 16,
    'medium': 24,
    'large' : 28,
    'xlarge': 32,
    'huge'  : 40,
};


export type IconProps = {
    children?: ReactNode;
    color?: string;
    size?: 'small' | 'medium'| 'large' | 'xlarge' | 'huge';
    baseClassName?: string;
}

//<span className="mds-picto__chat"></span>
const Icon = ({
    children = "person",
    color,
    size = 'medium',
    baseClassName = "icon"
}:IconProps) => {
    const baseClass = "mds-" + baseClassName + "__"
    return (
        <span className={`${baseClass}${children} mds-icon--${sizeMappingClass[size]} ${color ?  "mds-color__"+color : ''} `}></span>
    )
}

export default Icon;