import { default as React, ReactNode } from 'react';
export type ListItemText = {
    headline?: ReactNode;
    primary?: ReactNode;
    secondary?: ReactNode;
    className?: string;
};
declare const ListItemText: ({ headline, primary, secondary, className, }: ListItemText) => React.JSX.Element;
export default ListItemText;
