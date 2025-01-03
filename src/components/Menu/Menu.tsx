import React, { ReactNode } from "react";

export type MenuProps = {
    anchorEl:ReactNode;
    anchorOrigin?: 'tl' | 'tr' | 'bl' | 'br';
    children?:ReactNode;
    className?: string;
};


const AnchorMappingclass = {
    'tl' : 'mds-dropdown-position--top-left',
    'tr' : 'mds-dropdown-position--top-right',
    'bl' : 'mds-dropdown-position--bottom-left',
    'br' : 'mds-dropdown-position--bottom-right',
}

const Menu = ({
    anchorEl,
    anchorOrigin = 'bl',
    children,
    className = '',
}:MenuProps) => {
    
    const AnchorOrigin = AnchorMappingclass[anchorOrigin];

    return (
        <div className={`mds-dropdown__layout ${AnchorOrigin} ${className}`}>
            {anchorEl}
            <div className="mds-dropdown__container">
                <div className="mds-dropdown mds-dropdown__handleClick">
                    {children}
                </div>
            </div>
        </div>
    )
};

export default Menu;