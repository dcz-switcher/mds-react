import React, { ReactNode } from "react";


export type ListItemIconProps = {
    children?: ReactNode;
}

const ListItemIcon = ({
    children
}:ListItemIconProps) => {
    return (
        <span className="mds-action-list__item-icon" aria-hidden="true">
            {children}
        </span>
    )
};

export default ListItemIcon;