import { default as React, ReactNode } from 'react';
export type HeaderNavMenuProps = {
    children?: ReactNode;
    label?: string;
    className?: string;
};
declare const HeaderNavMenu: ({ children, label, className, }: HeaderNavMenuProps) => React.JSX.Element;
export default HeaderNavMenu;
