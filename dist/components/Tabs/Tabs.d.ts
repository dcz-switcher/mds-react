import { default as React, ReactNode } from 'react';
export type TabsProps = {
    reverse?: boolean;
    children?: ReactNode;
};
declare const Tabs: ({ reverse, children, }: TabsProps) => React.JSX.Element;
export default Tabs;
