import { default as React, ReactNode } from 'react';
export type CalloutProps = {
    title?: string;
    subtitle?: string;
    children?: ReactNode;
    color?: string;
    icon?: string;
    className?: string;
};
declare const Callout: ({ title, subtitle, children, color, icon, className, }: CalloutProps) => React.JSX.Element;
export default Callout;
