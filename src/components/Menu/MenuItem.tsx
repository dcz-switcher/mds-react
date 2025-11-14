import React, { ReactNode } from "react";

export type MenuItemProps = {
    children?: ReactNode;
    className?: string;
};

const MenuItem = ({
    children,
    className = '',
}:MenuItemProps) => {
    return (
        <div className={`mds-dropdown__item ${className}`}>
            {children}
        </div>
    )
};

export default MenuItem;