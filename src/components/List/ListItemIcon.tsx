import React, { ReactNode } from "react";


export type ListItemIconProps = {
    children?: ReactNode;
    className?: string;
}

const ListItemIcon = ({
    children,
    className,
}:ListItemIconProps) => {
    return (
        <span className={`mds-action-list__item-icon ${className}`} aria-hidden="true">
            {children}
        </span>
    )
};

export default ListItemIcon;