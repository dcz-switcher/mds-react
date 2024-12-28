import { default as React, ReactNode } from 'react';
export type BreadcrumbProps = {
    children?: ReactNode;
    color?: "link" | "primary" | "text";
    reverse?: boolean;
    className?: string;
};
declare const Breadcrumb: ({ children, color, reverse, className, }: BreadcrumbProps) => React.JSX.Element;
export default Breadcrumb;
