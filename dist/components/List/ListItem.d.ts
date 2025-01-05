import { default as React, ReactNode } from 'react';
export type ListItemProps = {
    children?: ReactNode;
    secondaryAction?: ReactNode;
    className?: string;
    trailingText?: string;
};
declare const ListItem: ({ children, secondaryAction, className, trailingText, }: ListItemProps) => React.JSX.Element;
export default ListItem;
