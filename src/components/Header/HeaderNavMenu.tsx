import React, { ReactNode } from "react";
import { Menu } from "../Menu";

export type HeaderNavMenuProps = {
    children?: ReactNode;
    label?: string;
    className?: string;
}

const HeaderNavMenu = ({
    children,
    label,
    className = '',
}:HeaderNavMenuProps) => {

    const anchorEl = <button className="mds-btn mds-header__nav-item mds-dropdown__trigger-element" style={{height: '100%'}} aria-controls='expandable' aria-expanded={false}>{label}<span className="mds-icon__expand-more--right" aria-hidden="true"></span></button>;

    return (
        <li className={`mds-header__menu-item ${className}`}>
            <Menu anchorEl={anchorEl} style={{height: '100%'}}>{children}</Menu>
        </li>
    )
}

export default HeaderNavMenu;