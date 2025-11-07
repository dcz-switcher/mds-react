import { default as React, ReactNode } from 'react';
export type HeaderProps = {
    sticky?: boolean;
    logoHref?: string;
    variant?: "default" | "simple";
    className?: string;
    navMenu?: ReactNode;
    navMenuPosition?: "under" | "inside";
};
declare const Header: ({ sticky, logoHref, variant, className, navMenu, navMenuPosition, ...props }: HeaderProps) => React.JSX.Element;
export default Header;
