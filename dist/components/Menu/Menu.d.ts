import { default as React, ReactNode } from 'react';
export type MenuProps = {
    anchorEl: ReactNode;
    anchorOrigin?: 'tl' | 'tr' | 'bl' | 'br';
    children?: ReactNode;
};
declare const Menu: ({ anchorEl, anchorOrigin, children, }: MenuProps) => React.JSX.Element;
export default Menu;
