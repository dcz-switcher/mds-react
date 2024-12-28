import { default as React, ReactNode } from 'react';
export type TabsProps = {
    reverse?: boolean;
    children?: ReactNode;
    className?: string;
};
declare const Tabs: ({ reverse, children, className, }: TabsProps) => React.JSX.Element;
export default Tabs;
