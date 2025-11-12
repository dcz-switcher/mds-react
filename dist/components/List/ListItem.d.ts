import { default as React, ReactNode } from 'react';
export type ListItemProps = {
    children?: ReactNode;
    secondaryAction?: ReactNode;
    className?: string;
    trailingText?: string;
    sidePadding?: boolean;
};
declare const ListItem: ({ children, secondaryAction, className, trailingText, sidePadding, }: ListItemProps) => React.JSX.Element;
export default ListItem;
