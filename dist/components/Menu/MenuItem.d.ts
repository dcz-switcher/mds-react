import { default as React, ReactNode } from 'react';
export type MenuItemProps = {
    children?: ReactNode;
    className?: string;
};
declare const MenuItem: ({ children, className, }: MenuItemProps) => React.JSX.Element;
export default MenuItem;
