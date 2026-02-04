import { default as React, ReactNode } from 'react';
export type BreadcrumbProps = {
    children?: ReactNode;
    color?: "link" | "primary" | "text";
    reverse?: boolean;
    title?: string;
    className?: string;
};
declare const Breadcrumb: ({ children, color, reverse, title, className, }: BreadcrumbProps) => React.JSX.Element;
export default Breadcrumb;
