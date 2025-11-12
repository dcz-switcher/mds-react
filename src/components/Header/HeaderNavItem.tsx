import React from "react";

export type HeaderNavItemProps = {
    label?: string;
    className?: string;
    href?: string;
}

const HeaderNavItem = ({
    label,
    className = '',
    href,
}:HeaderNavItemProps) => {
    return (
        <li className={`mds-header__menu-item ${className}`}>
            <a className={`mds-btn mds-header__nav-item ${className}`} style={{height: '100%'}} href={href}>{label}</a>
        </li>
    )
}

export default HeaderNavItem;