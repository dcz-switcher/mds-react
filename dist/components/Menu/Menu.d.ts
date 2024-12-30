import { default as React, ReactNode } from 'react';
export type MenuProps = {
    anchorEl: ReactNode;
    anchorOrigin?: 'tl' | 'tr' | 'bl' | 'br';
    children?: ReactNode;
    className?: string;
};
declare const Menu: ({ anchorEl, anchorOrigin, children, className, }: MenuProps) => React.JSX.Element;
export default Menu;
