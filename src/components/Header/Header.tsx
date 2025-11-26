import React, { ReactNode } from "react";
import { Divider } from "../Divider";

export type HeaderProps = {
    sticky?:boolean;
    logoHref?: string;
    variant?: "default" | "simple";
    className?: string;
    headerNav?: ReactNode;
    headerNavPosition?: "under" | "inside";
    headerLogoUrl?: string;
    headerLogoDesktopUrl?: string;
}

const Header = ({
    sticky = false,
    logoHref = "/",
    variant = "default",
    className = '',
    headerNav,
    headerNavPosition = "under",
    headerLogoUrl,
    headerLogoDesktopUrl,
    ...props
}:HeaderProps) => {


    return (
        <header role="banner" className={`mds-header ${variant == "simple" ? "mds-header--simplified" : ""} ${sticky ? "mds-position--sticky" : ""} ${className}`} {...props}>
            
            <div className="mds-header__container">
                <div className="mds-header__container--left-side">
                    <a className="mds-header__logo" title="Accueil" href={logoHref} aria-label="aller à la page d'accueil xxxx">
                        <img style={{height: "100%"}} src={headerLogoUrl} />
                    </a>
                </div>
                <div className="mds-header__container--right-side">
                    {headerNav ? 
                        <button className="mds-btn mds-header__nav-item">
                            <span className="mds-icon__menu" aria-hidden="true"></span>
                            menu
                        </button>
                        :""
                    }
                </div>
            </div>

            <div className="mds-header__container--desktop">
                <div className="mds-header__top-container mds-container mds-inset--0">
                    <div className="mds-header__container--left-side">
                            <div className="mds-header__logo-container">
                                <a className="mds-header__logo" title="Accueil" href={logoHref}>
                                    <img style={{height: "100%"}} src={headerLogoDesktopUrl} />
                                </a>
                            </div>
                    </div>
                    <div className="mds-header__container--right-side" style={{height: '100%'}}>
                        { (headerNav && headerNavPosition == "inside") ?
                                headerNav
                            : ""
                        }
                    </div>
                </div>
            </div>
            <Divider/>
            { (headerNav && headerNavPosition == "under") ?
                <>
                <div className="mds-header__container--desktop mds-display--none mds-display-md--block">
                    {headerNav}
                <Divider/>
                </div>
                </>
                : ""
            }


        </header>
    )
}

export default Header;