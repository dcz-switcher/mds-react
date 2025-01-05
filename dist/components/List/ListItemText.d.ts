import { default as React, ReactNode } from 'react';
export type ListItemText = {
    headline?: ReactNode;
    title?: ReactNode;
    supportingText?: string;
    className?: string;
    href?: string;
};
declare const ListItemText: ({ headline, title, supportingText, className, href, }: ListItemText) => React.JSX.Element;
export default ListItemText;
