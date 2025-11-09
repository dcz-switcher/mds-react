import React, {ReactNode} from "react";

export type HeaderNavProps = {
    children?: ReactNode;
    className?: string;
}

const HeaderNav = ({
    children,
    className = '',
}:HeaderNavProps) => {
    return (
        <div className={`mds-container mds-display--flex ${className}`} style={{marginTop: 0, marginBottom: 0}}>
            <nav role="navigation" aria-label="menu principal" className='mds-display--flex' style={{alignItems: "center", margin: 0}}>
                <ul className="mds-header__menu mds-handleClick-nav-item-btn" style={{height: '100%'}}>
                    {children}
                </ul>
            </nav>
        </div>
    )
}

export default HeaderNav;