import { default as React, ReactNode } from 'react';
export type TabsProps = {
    reverse?: boolean;
    children?: ReactNode;
    className?: string;
    variant?: "default" | "pills";
};
declare const Tabs: ({ reverse, children, className, variant, ...props }: TabsProps) => React.JSX.Element;
export default Tabs;
