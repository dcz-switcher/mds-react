import { default as React, ReactNode } from 'react';
export type BreadcrumbProps = {
    children?: ReactNode;
    color?: "link" | "primary" | "text";
    reverse?: boolean;
};
declare const Breadcrumb: ({ children, color, reverse, }: BreadcrumbProps) => React.JSX.Element;
export default Breadcrumb;
