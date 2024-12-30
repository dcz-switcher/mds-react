import React, { ReactNode } from "react";

export type MenuItemProps = {
    children?: ReactNode;
};

const MenuItem = ({
    children,
}:MenuItemProps) => {
    return (
        <div className="mds-dropdown__item">
            {children}
        </div>
    )
};

export default MenuItem;