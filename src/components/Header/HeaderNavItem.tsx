import React from "react";

export type HeaderNavItemProps = {
    label?: string;
    className?: string;
}

const HeaderNavItem = ({
    label,
    className,
}:HeaderNavItemProps) => {
    return (
        <li className={`mds-header__menu-item ${className}`}>
            <button className="mds-btn mds-header__nav-item" style={{height: '100%'}}>{label}</button>
        </li>
    )
}

export default HeaderNavItem;