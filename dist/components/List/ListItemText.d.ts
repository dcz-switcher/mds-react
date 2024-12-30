import { default as React, ReactNode } from 'react';
export type ListItemText = {
    headline?: ReactNode;
    primary?: ReactNode;
    secondary?: ReactNode;
};
declare const ListItemText: ({ headline, primary, secondary, }: ListItemText) => React.JSX.Element;
export default ListItemText;
