import { default as React, ReactNode } from 'react';
export type HeaderProps = {
    sticky?: boolean;
    logoHref?: string;
    variant?: "default" | "simple";
    className?: string;
    headerNav?: ReactNode;
    headerNavPosition?: "under" | "inside";
    headerLogoUrl?: string;
    headerLogoDesktopUrl?: string;
};
declare const Header: ({ sticky, logoHref, variant, className, headerNav, headerNavPosition, headerLogoUrl, headerLogoDesktopUrl, ...props }: HeaderProps) => React.JSX.Element;
export default Header;
